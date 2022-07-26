import { ArgsType, Field } from '@nestjs/graphql';
// import { UserCreateInput } from './UserCreateInput';
import { CreateUserInput } from '../dto/create-user.input';

@ArgsType()
export class CreateUserArgs {
  @Field(() => CreateUserInput, { nullable: false })
  data!: CreateUserInput;
}
