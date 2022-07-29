import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Freelancer {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
