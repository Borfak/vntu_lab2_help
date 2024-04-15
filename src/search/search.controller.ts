import {
  Controller,
  Get,
  Post,
  HttpCode,
  HttpStatus,
  Render,
  Body,
} from '@nestjs/common';
import { CompanyEntity } from 'src/companies/entities/company.entity';
import { CompaniesRepository } from 'src/companies/repositories/companies.repository';

@Controller('search')
export class SearchController {
  constructor(private readonly companiesRepository: CompaniesRepository) {}

  @Get()
  @Render('search/index')
  search(): void {}

  @Post()
  @HttpCode(HttpStatus.OK)
  async searchCompanies(
    @Body('phrase') phrase: string,
  ): Promise<CompanyEntity[]> {
    return await this.companiesRepository.searchCompanies(phrase);
  }
}
