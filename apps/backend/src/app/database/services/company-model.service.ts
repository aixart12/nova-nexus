import { Injectable } from '@nestjs/common';
import { Repository, Sequelize } from 'sequelize-typescript';
import { BaseService } from './base.service';
import { CompanySchema } from '../models';
import { TCompany } from '@nova-nexus/common-models';

@Injectable()
export class CompanyModelService extends BaseService<CompanySchema, TCompany> {
  repository: Repository<CompanySchema>;

  constructor(public readonly sequelize: Sequelize) {
    super();
    this.repository = sequelize.getRepository(CompanySchema);
  }
}
