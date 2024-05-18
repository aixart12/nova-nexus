import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { from } from 'rxjs';
import { Multer } from 'multer';
import { existsSync, mkdirSync, createWriteStream } from 'fs';
import { extname, join } from 'path';
import { createHash } from 'crypto';
import * as _ from 'lodash';
import { Request } from 'express';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const Busboy = require('busboy');
// import * as path from 'path';
export const UploadsFolderName = join(process.cwd(), 'public', 'uploads');
export const getUploadedFilePath = (filename: string) =>
  join(UploadsFolderName, filename);
@Injectable()
export class FileUploadInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const ctx = context.switchToHttp();
    const req = ctx.getRequest<Request>();
    return from(
      new Promise((resolve, reject) => {
        const busboy = Busboy({ headers: req.headers as any });
        const files = [];
        let fileBuffer;
        let fileInRequest: any;
        busboy.on('file', (fieldname, file, filename, encoding, mimetype) => {
          const md5Hash = createHash('md5');
          const fileChunks = [];
          const randomName = Array(8)
            .fill(null)
            .map(() => Math.round(Math.random() * 16).toString(16))
            .join('');
          if (!existsSync(UploadsFolderName)) {
            mkdirSync(UploadsFolderName, { recursive: true });
          }
          file.on('data', chunk => {
            fileChunks.push(chunk);
            md5Hash.update(chunk);
          });
          file.on('end', () => {
            fileBuffer = Buffer.concat(fileChunks);
            const fileExtName = extname(filename.filename);
            const filenameWithId = `${randomName}${fileExtName}`;
            if (fileInRequest) {
              files.push({
                fieldname,
                originalname: filename,
                filename: filenameWithId,
                mimetype,
                encoding,
                identifier: md5Hash.digest('hex'),
              });
            } else {
              // when one file
              fileInRequest = {
                fieldname,
                originalname: filename,
                filename: filenameWithId,
                mimetype,
                encoding,
                identifier: md5Hash.digest('hex'),
                buffer: fileBuffer,
              };
              files.push(fileInRequest);
            }
          });
          file.on('error', reject);
          const fileExtName = extname(filename.filename);
          const filenameWithId = `${randomName}${fileExtName}`;
          const saveTo = join(UploadsFolderName, filenameWithId);
          file.pipe(createWriteStream(saveTo));
          // When multiple files
        });
        const fields = {};
        busboy.on('field', (fieldname, value) => {
          fields[fieldname] = value;
        });
        busboy.on('finish', () => {
          _.set(req, 'files', files);
          _.set(req, 'file', fileInRequest);
          _.set(req, 'body', fields);
          resolve(req);
        });
        req.pipe(busboy);
      }),
    ).pipe(switchMap(() => next.handle()));
  }
}
