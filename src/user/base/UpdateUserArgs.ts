import { ArgsType, Field } from '@nestjs/graphql';
import { UpdateUserInput } from '../dto/update-user.input';
import { UserWhereUniqueInput } from './UserWhereUniqueInput';

@ArgsType()
class UpdateUserArgs {
  @Field(() => UserWhereUniqueInput, { nullable: false })
  where!: UserWhereUniqueInput;
  @Field(() => UpdateUserInput, { nullable: false })
  data!: UpdateUserInput;
}

export { UpdateUserArgs };
