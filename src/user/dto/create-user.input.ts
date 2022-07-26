import { InputType, Field } from '@nestjs/graphql';
import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsPhoneNumber } from 'class-validator';

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
  firstName?: string | null;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String, {
    nullable: false,
  })
  lastName?: string | null;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String, {
    nullable: false,
  })
  email?: string | null;

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
  @IsPhoneNumber()
  @Field(() => String)
  phone!: string;
}
