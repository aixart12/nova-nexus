import { Module } from '@nestjs/common';
import { DatabaseModule } from '../../database/database.module';
import { CompanyModelService } from '../../database/services';
import { CompanyController } from './company.controller';
import { CompanyService } from './company.service';

@Module({
  imports: [DatabaseModule.forFeature([CompanyModelService])],
  controllers: [CompanyController],
  providers: [CompanyService],
  exports: [CompanyService],
})
export class CompanyModule {}
