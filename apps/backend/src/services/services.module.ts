import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Service } from './service.entity';
import { ServicesController } from './services.controller';
import { ServicesService } from './services.service';
import { AgencyModule } from '../agency/agency.module';

@Module({
  imports: [TypeOrmModule.forFeature([Service]), AgencyModule],
  controllers: [ServicesController],
  providers: [ServicesService],
})
export class ServicesModule {}
