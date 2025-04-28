import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Service } from './service.entity';

@Injectable()
export class ServicesService {
  constructor(
    @InjectRepository(Service)
    private readonly serviceRepository: Repository<Service>,
  ) {}

  async findAll(): Promise<Service[]> {
    return this.serviceRepository.find();
  }

  async findByService(service: string): Promise<Service[]> {
    return this.serviceRepository.find({ where: { service } });
  }

  async findByLocation(location: string): Promise<Service[]> {
    return this.serviceRepository.find({ where: { location } });
  }

  async search(query: string): Promise<Service[]> {
    return this.serviceRepository
      .createQueryBuilder('service')
      .where('service.name ILIKE :query', { query: `%${query}%` })
      .orWhere('service.description ILIKE :query', { query: `%${query}%` })
      .getMany();
  }
}
