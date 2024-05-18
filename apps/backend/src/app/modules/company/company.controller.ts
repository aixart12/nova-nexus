import { ApiTags } from '@nestjs/swagger';
import { CompanyService } from './company.service';
import { Controller, Get } from '@nestjs/common';

@ApiTags('Company')
@Controller('company')
export class CompanyController {
  constructor(private readonly companyService: CompanyService) {}

  @Get('/')
  getCompanies() {
    return 'Dhruv ';
  }
}
