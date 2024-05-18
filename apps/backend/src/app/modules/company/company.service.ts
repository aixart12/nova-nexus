import { Injectable } from '@nestjs/common';
import { CompanyModelService } from '../../database/services';

@Injectable()
export class CompanyService {
  constructor(private readonly companyModelService: CompanyModelService) {}
}
