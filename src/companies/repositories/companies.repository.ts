import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ILike, Repository } from 'typeorm';
import { CompanyEntity } from '../entities/company.entity';

@Injectable()
export class CompaniesRepository {
  constructor(
    @InjectRepository(CompanyEntity)
    private readonly companiesRepository: Repository<CompanyEntity>,
  ) {}

  async createCompany(name: string): Promise<CompanyEntity> {
    return await this.companiesRepository.save({ name });
  }

  async findMany(): Promise<CompanyEntity[]> {
    return await this.companiesRepository.find();
  }

  async searchCompanies(phrase: string): Promise<CompanyEntity[]> {
    return await this.companiesRepository.findBy({
      name: ILike(`%${phrase}%`),
    });
  }
}
