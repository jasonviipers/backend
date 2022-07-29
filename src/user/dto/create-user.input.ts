import { InputType, Field } from '@nestjs/graphql';
import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsPhoneNumber, IsEmail } from 'class-validator';

@InputType()
export class CreateUserInput {
  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String, {
    nullable: false,
  })
  firstName?: string;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String, {
    nullable: false,
  })
  lastName?: string;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String, {
    nullable: false,
  })
  @IsEmail()
  email?: string;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  password!: string;

  @ApiProperty({
    required: true,
    type: [String],
  })
  @IsString({
    each: true,
  })
  @Field(() => [String])
  roles!: Array<string>;

  @ApiProperty({
    required: true,
    type: String,
  })
  @Field(() => String)
  @IsPhoneNumber()
  phone!: string;
}
