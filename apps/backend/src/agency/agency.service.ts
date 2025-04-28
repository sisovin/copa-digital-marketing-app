import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Agency } from './agency.entity';

@Injectable()
export class AgencyService {
  constructor(
    @InjectRepository(Agency)
    private readonly agencyRepository: Repository<Agency>,
  ) {}

  async findAll(): Promise<Agency[]> {
    return this.agencyRepository.find();
  }

  async findByService(service: string): Promise<Agency[]> {
    return this.agencyRepository.find({ where: { service } });
  }

  async findByLocation(location: string): Promise<Agency[]> {
    return this.agencyRepository.find({ where: { location } });
  }

  async search(query: string): Promise<Agency[]> {
    return this.agencyRepository
      .createQueryBuilder('agency')
      .where('agency.name ILIKE :query', { query: `%${query}%` })
      .orWhere('agency.description ILIKE :query', { query: `%${query}%` })
      .getMany();
  }
}
