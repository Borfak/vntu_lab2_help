import { Module } from '@nestjs/common';
import { CompaniesModule } from 'src/companies/companies.module';

@Module({
  imports: [CompaniesModule],
})
export class SearchModule {}
