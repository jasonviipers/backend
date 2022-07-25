import { ArgsType, Field } from '@nestjs/graphql';
import { CredentialsRegister } from './Credentials/CredentialsRegister';

@ArgsType()
export class RegisterArgs {
  @Field(() => CredentialsRegister, { nullable: false })
  credentials!: CredentialsRegister;
}
