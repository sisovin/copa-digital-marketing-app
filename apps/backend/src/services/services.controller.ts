import { Controller, Get, Query } from '@nestjs/common';
import { ServicesService } from './services.service';
import { Service } from './service.entity';

@Controller('services')
export class ServicesController {
  constructor(private readonly servicesService: ServicesService) {}

  @Get()
  async findAll(): Promise<Service[]> {
    return this.servicesService.findAll();
  }

  @Get('search')
  async search(@Query('query') query: string): Promise<Service[]> {
    return this.servicesService.search(query);
  }

  @Get('by-service')
  async findByService(@Query('service') service: string): Promise<Service[]> {
    return this.servicesService.findByService(service);
  }

  @Get('by-location')
  async findByLocation(@Query('location') location: string): Promise<Service[]> {
    return this.servicesService.findByLocation(location);
  }
}
