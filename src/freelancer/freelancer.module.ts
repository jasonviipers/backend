import { Module } from '@nestjs/common';
import { FreelancerService } from './freelancer.service';
import { FreelancerResolver } from './freelancer.resolver';

@Module({
  providers: [FreelancerResolver, FreelancerService]
})
export class FreelancerModule {}
