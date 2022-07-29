import { CreateFreelancerInput } from './create-freelancer.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateFreelancerInput extends PartialType(CreateFreelancerInput) {
  @Field(() => Int)
  id: number;
}
