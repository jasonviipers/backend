import { ArgsType, Field } from '@nestjs/graphql';
import { CreateUserInput } from '../dto/create-user.input';

@ArgsType()
class CreateUserArgs {
  @Field(() => CreateUserInput, { nullable: false })
  data!: CreateUserInput;
}

export { CreateUserArgs };
