import { Mutation, Args, Int } from '@nestjs/graphql';
import * as graphql from '@nestjs/graphql';

import { UserService } from './user.service';
import { User } from './entities/user.entity';

@graphql.Resolver(() => User)
export class UserResolver {
  constructor(private readonly service: UserService) {}

  @graphql.Query(() => [User])
  async users(): Promise<User[]> {
    return this.service.findMany({});
  }

  @graphql.Query(() => User)
  async user(@Args({ name: 'id', type: () => Int }) id: number): Promise<User> {
    return this.service.findOne({ where: { id } });
  }

  // @graphql.Mutation(() => User)
  // async createUser(
  //   @Args({ name: 'user', type: () => User }) user: User,
  // ): Promise<User> {
  //   return this.userService.create({ data: user });
  // }

  // @graphql.Mutation(() => User)
  // async updateUser(
  //   @Args({ name: 'id', type: () => Int }) id: number,
  //   @Args({ name: 'user', type: () => User }) user: User,
  // ): Promise<User> {
  //   return this.userService.updateUser({ where: { id }, data: user });
  // }

  @graphql.Mutation(() => User)
  async deleteUser(
    @Args({ name: 'id', type: () => Int }) id: number,
  ): Promise<User> {
    return this.service.delete({ id: id });
  }
}
