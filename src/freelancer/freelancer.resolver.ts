import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { FreelancerService } from './freelancer.service';
import { Freelancer } from './entities/freelancer.entity';
import { CreateFreelancerInput } from './dto/create-freelancer.input';
import { UpdateFreelancerInput } from './dto/update-freelancer.input';

@Resolver(() => Freelancer)
export class FreelancerResolver {
  constructor(private readonly freelancerService: FreelancerService) {}

  @Mutation(() => Freelancer)
  createFreelancer(@Args('createFreelancerInput') createFreelancerInput: CreateFreelancerInput) {
    return this.freelancerService.create(createFreelancerInput);
  }

  @Query(() => [Freelancer], { name: 'freelancer' })
  findAll() {
    return this.freelancerService.findAll();
  }

  @Query(() => Freelancer, { name: 'freelancer' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.freelancerService.findOne(id);
  }

  @Mutation(() => Freelancer)
  updateFreelancer(@Args('updateFreelancerInput') updateFreelancerInput: UpdateFreelancerInput) {
    return this.freelancerService.update(updateFreelancerInput.id, updateFreelancerInput);
  }

  @Mutation(() => Freelancer)
  removeFreelancer(@Args('id', { type: () => Int }) id: number) {
    return this.freelancerService.remove(id);
  }
}
