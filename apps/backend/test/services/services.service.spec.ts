import { Test, TestingModule } from '@nestjs/testing';
import { ServicesService } from '../../src/services/services.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Service } from '../../src/services/service.entity';
import { Repository } from 'typeorm';

const mockServiceRepository = () => ({
  find: jest.fn(),
  findOne: jest.fn(),
  save: jest.fn(),
  remove: jest.fn(),
  findByService: jest.fn(),
  findByLocation: jest.fn(),
  search: jest.fn(),
});

describe('ServicesService', () => {
  let service: ServicesService;
  let repository: Repository<Service>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ServicesService,
        {
          provide: getRepositoryToken(Service),
          useFactory: mockServiceRepository,
        },
      ],
    }).compile();

    service = module.get<ServicesService>(ServicesService);
    repository = module.get<Repository<Service>>(getRepositoryToken(Service));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('findAll', () => {
    it('should return an array of services', async () => {
      const result = [{ id: '1', name: 'Test Service' }];
      jest.spyOn(repository, 'find').mockResolvedValue(result as Service[]);
      expect(await service.findAll()).toBe(result);
    });
  });

  describe('findByService', () => {
    it('should return an array of services filtered by service', async () => {
      const result = [{ id: '1', name: 'Test Service', service: 'SEO' }];
      jest.spyOn(repository, 'find').mockResolvedValue(result as Service[]);
      expect(await service.findByService('SEO')).toBe(result);
    });
  });

  describe('findByLocation', () => {
    it('should return an array of services filtered by location', async () => {
      const result = [{ id: '1', name: 'Test Service', location: 'New York' }];
      jest.spyOn(repository, 'find').mockResolvedValue(result as Service[]);
      expect(await service.findByLocation('New York')).toBe(result);
    });
  });

  describe('search', () => {
    it('should return an array of services matching the search query', async () => {
      const result = [{ id: '1', name: 'Test Service', description: 'Best service' }];
      jest.spyOn(repository, 'createQueryBuilder').mockReturnValue({
        where: jest.fn().mockReturnThis(),
        orWhere: jest.fn().mockReturnThis(),
        getMany: jest.fn().mockResolvedValue(result as Service[]),
      } as any);
      expect(await service.search('Best')).toBe(result);
    });
  });
});
