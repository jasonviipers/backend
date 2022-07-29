import { Test, TestingModule } from '@nestjs/testing';
import { FreelancerResolver } from './freelancer.resolver';
import { FreelancerService } from './freelancer.service';

describe('FreelancerResolver', () => {
  let resolver: FreelancerResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FreelancerResolver, FreelancerService],
    }).compile();

    resolver = module.get<FreelancerResolver>(FreelancerResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
