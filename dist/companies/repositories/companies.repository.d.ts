import { Repository } from 'typeorm';
import { CompanyEntity } from '../entities/company.entity';
export declare class CompaniesRepository {
    private readonly companiesRepository;
    constructor(companiesRepository: Repository<CompanyEntity>);
    createCompany(name: string): Promise<CompanyEntity>;
    findMany(): Promise<CompanyEntity[]>;
    searchCompanies(phrase: string): Promise<CompanyEntity[]>;
}
