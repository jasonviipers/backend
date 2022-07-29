import { ObjectType, Field } from '@nestjs/graphql';
import { IsEmail, IsPhoneNumber } from 'class-validator';

@ObjectType()
export class User {
  @Field(() => String)
  id: string;

  @Field(() => String)
  firstName: string;

  @Field(() => String)
  lastName: string;

  @Field(() => String)
  password: string;

  @Field(() => String)
  @IsEmail()
  email: string;

  @Field(() => String)
  @IsPhoneNumber()
  phone: string;

  @Field(() => [String])
  roles: Array<string>;
}
