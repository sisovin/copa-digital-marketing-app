import { Controller, Get, Query } from '@nestjs/common';
import { AgencyService } from './agency.service';
import { Agency } from './agency.entity';

@Controller('agencies')
export class AgencyController {
  constructor(private readonly agencyService: AgencyService) {}

  @Get()
  async findAll(): Promise<Agency[]> {
    return this.agencyService.findAll();
  }

  @Get('search')
  async search(@Query('query') query: string): Promise<Agency[]> {
    return this.agencyService.search(query);
  }

  @Get('by-service')
  async findByService(@Query('service') service: string): Promise<Agency[]> {
    return this.agencyService.findByService(service);
  }

  @Get('by-location')
  async findByLocation(@Query('location') location: string): Promise<Agency[]> {
    return this.agencyService.findByLocation(location);
  }
}
