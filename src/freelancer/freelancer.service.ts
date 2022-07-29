import { Injectable } from '@nestjs/common';
import { CreateFreelancerInput } from './dto/create-freelancer.input';
import { UpdateFreelancerInput } from './dto/update-freelancer.input';

@Injectable()
export class FreelancerService {
  create(createFreelancerInput: CreateFreelancerInput) {
    return 'This action adds a new freelancer';
  }

  findAll() {
    return `This action returns all freelancer`;
  }

  findOne(id: number) {
    return `This action returns a #${id} freelancer`;
  }

  update(id: number, updateFreelancerInput: UpdateFreelancerInput) {
    return `This action updates a #${id} freelancer`;
  }

  remove(id: number) {
    return `This action removes a #${id} freelancer`;
  }
}
