import { ApiProperty } from '@nestjs/swagger';
import { InputType, Field } from '@nestjs/graphql';
import { IsEmail, IsMobilePhone, IsString } from 'class-validator';
import { User } from 'src/user/entities/user.entity';

@InputType()
export class CredentialsRegister implements Partial<User> {
  @ApiProperty({
    required: true,
    type: String,
  })
  @Field(() => String, { nullable: false })
  @IsString()
  firstName?: string;

  @ApiProperty({
    required: true,
    type: String,
  })
  @Field(() => String, { nullable: false })
  @IsString()
  lastName?: string;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsEmail()
  @Field(() => String, { nullable: false })
  email!: string;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsMobilePhone()
  @Field(() => String, { nullable: false })
  phone!: string;

  @ApiProperty({
    required: true,
    type: String,
  })
  @Field(() => String, { nullable: false })
  @IsString()
  password!: string;
}
