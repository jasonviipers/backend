import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateFreelancerInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
