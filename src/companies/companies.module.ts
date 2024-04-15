import { Module } from '@nestjs/common';
import { CompanyEntity } from './entities/company.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CompaniesRepository } from './repositories/companies.repository';
import { CompaniesController } from './companies.controller';

@Module({
  imports: [TypeOrmModule.forFeature([CompanyEntity])],
  controllers: [CompaniesController],
  providers: [CompaniesRepository],
  exports: [CompaniesRepository],
})
export class CompaniesModule {}
