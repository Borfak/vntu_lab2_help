import { CompaniesRepository } from './repositories/companies.repository';
import { CompanyEntity } from './entities/company.entity';
export declare class CompaniesController {
    private readonly companiesRepository;
    constructor(companiesRepository: CompaniesRepository);
    createCompany(name: string): Promise<CompanyEntity>;
    getCompanies(): Promise<CompanyEntity[]>;
}
