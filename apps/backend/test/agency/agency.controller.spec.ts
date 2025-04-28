import { Test, TestingModule } from '@nestjs/testing';
import { AgencyController } from '../../src/agency/agency.controller';
import { AgencyService } from '../../src/agency/agency.service';
import { Agency } from '../../src/agency/agency.entity';

const mockAgencyService = () => ({
  findAll: jest.fn(),
  search: jest.fn(),
  findByService: jest.fn(),
  findByLocation: jest.fn(),
});

describe('AgencyController', () => {
  let controller: AgencyController;
  let service: ReturnType<typeof mockAgencyService>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AgencyController],
      providers: [
        {
          provide: AgencyService,
          useFactory: mockAgencyService,
        },
      ],
    }).compile();

    controller = module.get<AgencyController>(AgencyController);
    service = module.get<AgencyService>(AgencyService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('findAll', () => {
    it('should return an array of agencies', async () => {
      const result = [{ id: '1', name: 'Test Agency' }];
      jest.spyOn(service, 'findAll').mockResolvedValue(result as Agency[]);
      expect(await controller.findAll()).toBe(result);
    });
  });

  describe('search', () => {
    it('should return an array of agencies matching the search query', async () => {
      const result = [{ id: '1', name: 'Test Agency', description: 'Best agency' }];
      jest.spyOn(service, 'search').mockResolvedValue(result as Agency[]);
      expect(await controller.search('Best')).toBe(result);
    });
  });

  describe('findByService', () => {
    it('should return an array of agencies filtered by service', async () => {
      const result = [{ id: '1', name: 'Test Agency', service: 'SEO' }];
      jest.spyOn(service, 'findByService').mockResolvedValue(result as Agency[]);
      expect(await controller.findByService('SEO')).toBe(result);
    });
  });

  describe('findByLocation', () => {
    it('should return an array of agencies filtered by location', async () => {
      const result = [{ id: '1', name: 'Test Agency', location: 'New York' }];
      jest.spyOn(service, 'findByLocation').mockResolvedValue(result as Agency[]);
      expect(await controller.findByLocation('New York')).toBe(result);
    });
  });
});
