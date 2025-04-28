import { Test, TestingModule } from '@nestjs/testing';
import { AgencyService } from '../../src/agency/agency.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Agency } from '../../src/agency/agency.entity';
import { Repository } from 'typeorm';

const mockAgencyRepository = () => ({
  find: jest.fn(),
  findOne: jest.fn(),
  save: jest.fn(),
  remove: jest.fn(),
  findByService: jest.fn(),
  findByLocation: jest.fn(),
  search: jest.fn(),
});

describe('AgencyService', () => {
  let service: AgencyService;
  let repository: Repository<Agency>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AgencyService,
        {
          provide: getRepositoryToken(Agency),
          useFactory: mockAgencyRepository,
        },
      ],
    }).compile();

    service = module.get<AgencyService>(AgencyService);
    repository = module.get<Repository<Agency>>(getRepositoryToken(Agency));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('findAll', () => {
    it('should return an array of agencies', async () => {
      const result = [{ id: '1', name: 'Test Agency' }];
      jest.spyOn(repository, 'find').mockResolvedValue(result as Agency[]);
      expect(await service.findAll()).toBe(result);
    });
  });

  describe('findByService', () => {
    it('should return an array of agencies filtered by service', async () => {
      const result = [{ id: '1', name: 'Test Agency', service: 'SEO' }];
      jest.spyOn(repository, 'find').mockResolvedValue(result as Agency[]);
      expect(await service.findByService('SEO')).toBe(result);
    });
  });

  describe('findByLocation', () => {
    it('should return an array of agencies filtered by location', async () => {
      const result = [{ id: '1', name: 'Test Agency', location: 'New York' }];
      jest.spyOn(repository, 'find').mockResolvedValue(result as Agency[]);
      expect(await service.findByLocation('New York')).toBe(result);
    });
  });

  describe('search', () => {
    it('should return an array of agencies matching the search query', async () => {
      const result = [{ id: '1', name: 'Test Agency', description: 'Best agency' }];
      jest.spyOn(repository, 'createQueryBuilder').mockReturnValue({
        where: jest.fn().mockReturnThis(),
        orWhere: jest.fn().mockReturnThis(),
        getMany: jest.fn().mockResolvedValue(result as Agency[]),
      } as any);
      expect(await service.search('Best')).toBe(result);
    });
  });
});
