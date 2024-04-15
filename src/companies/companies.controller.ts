import { Body, Controller, Get, Post } from '@nestjs/common';
import { CompaniesRepository } from './repositories/companies.repository';
import { CompanyEntity } from './entities/company.entity';

@Controller('companies')
export class CompaniesController {
  constructor(private readonly companiesRepository: CompaniesRepository) {}

  @Post()
  async createCompany(@Body('name') name: string): Promise<CompanyEntity> {
    return await this.companiesRepository.createCompany(name);
  }

  @Get()
  async getCompanies(): Promise<CompanyEntity[]> {
    return await this.companiesRepository.findMany();
  }
}
