import { CompanyEntity } from 'src/companies/entities/company.entity';
import { CompaniesRepository } from 'src/companies/repositories/companies.repository';
export declare class SearchController {
    private readonly companiesRepository;
    constructor(companiesRepository: CompaniesRepository);
    search(): void;
    searchCompanies(phrase: string): Promise<CompanyEntity[]>;
}
