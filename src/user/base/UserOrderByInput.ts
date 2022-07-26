import { InputType, Field } from '@nestjs/graphql';
import { ApiProperty } from '@nestjs/swagger';
import { SortOrder } from 'src/utils/SortOrder';

@InputType({
  isAbstract: true,
  description: undefined,
})
class UserOrderByInput {
  @ApiProperty({
    required: false,
    enum: ['asc', 'desc'],
  })
  @Field(() => SortOrder, {
    nullable: true,
  })
  createdAt?: SortOrder;

  @ApiProperty({
    required: false,
    enum: ['asc', 'desc'],
  })
  @Field(() => SortOrder, {
    nullable: true,
  })
  firstName?: SortOrder;

  @ApiProperty({
    required: false,
    enum: ['asc', 'desc'],
  })
  @Field(() => SortOrder, {
    nullable: true,
  })
  lastName?: SortOrder;

  @ApiProperty({
    required: false,
    enum: ['asc', 'desc'],
  })
  @Field(() => SortOrder, {
    nullable: true,
  })
  id?: SortOrder;

  @ApiProperty({
    required: false,
    enum: ['asc', 'desc'],
  })
  @Field(() => SortOrder, {
    nullable: true,
  })
  password?: SortOrder;

  @ApiProperty({
    required: false,
    enum: ['asc', 'desc'],
  })
  @Field(() => SortOrder, {
    nullable: true,
  })
  roles?: SortOrder;

  @ApiProperty({
    required: false,
    enum: ['asc', 'desc'],
  })
  @Field(() => SortOrder, {
    nullable: true,
  })
  updatedAt?: SortOrder;

  @ApiProperty({
    required: false,
    enum: ['asc', 'desc'],
  })
  @Field(() => SortOrder, {
    nullable: true,
  })
  phone?: SortOrder;
}

export { UserOrderByInput };
