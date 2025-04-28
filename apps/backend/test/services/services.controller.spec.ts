import { Test, TestingModule } from '@nestjs/testing';
import { ServicesController } from '../../src/services/services.controller';
import { ServicesService } from '../../src/services/services.service';
import { Service } from '../../src/services/service.entity';

const mockServicesService = () => ({
  findAll: jest.fn(),
  findByService: jest.fn(),
  findByLocation: jest.fn(),
  search: jest.fn(),
});

describe('ServicesController', () => {
  let controller: ServicesController;
  let service: ServicesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ServicesController],
      providers: [
        {
          provide: ServicesService,
          useFactory: mockServicesService,
        },
      ],
    }).compile();

    controller = module.get<ServicesController>(ServicesController);
    service = module.get<ServicesService>(ServicesService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('findAll', () => {
    it('should return an array of services', async () => {
      const result = [{ id: '1', name: 'Test Service' }];
      jest.spyOn(service, 'findAll').mockResolvedValue(result as Service[]);
      expect(await controller.findAll()).toBe(result);
    });
  });

  describe('findByService', () => {
    it('should return an array of services filtered by service', async () => {
      const result = [{ id: '1', name: 'Test Service', service: 'SEO' }];
      jest.spyOn(service, 'findByService').mockResolvedValue(result as Service[]);
      expect(await controller.findByService('SEO')).toBe(result);
    });
  });

  describe('findByLocation', () => {
    it('should return an array of services filtered by location', async () => {
      const result = [{ id: '1', name: 'Test Service', location: 'New York' }];
      jest.spyOn(service, 'findByLocation').mockResolvedValue(result as Service[]);
      expect(await controller.findByLocation('New York')).toBe(result);
    });
  });

  describe('search', () => {
    it('should return an array of services matching the search query', async () => {
      const result = [{ id: '1', name: 'Test Service', description: 'Best service' }];
      jest.spyOn(service, 'search').mockResolvedValue(result as Service[]);
      expect(await controller.search('Best')).toBe(result);
    });
  });
});
