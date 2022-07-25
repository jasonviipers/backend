import { Args, Int } from '@nestjs/graphql';
import * as graphql from '@nestjs/graphql';
import * as apollo from 'apollo-server-express';
import * as nestAccessControl from 'nest-access-control';
import * as common from '@nestjs/common';

import { UserService } from './user.service';
import { User } from './entities/user.entity';

import { GqlDefaultAuthGuard } from 'src/auth/gqlDefaultAuth.guard';
import * as gqlACGuard from '../auth/gqlAC.guard';
import { AclFilterResponseInterceptor } from 'src/interceptors/aclFilterResponse.interceptor';
import { AclValidateRequestInterceptor } from 'src/interceptors/aclValidateRequest.interceptor';
import { UpdateUserArgs } from './base/UpdateUserArgs';
import { isRecordNotFoundError } from 'src/prisma.util';

@graphql.Resolver(() => User)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class UserResolver {
  constructor(
    protected readonly service: UserService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder,
  ) {}

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [User])
  @nestAccessControl.UseRoles({
    resource: 'User',
    action: 'read',
    possession: 'any',
  })
  async users(): Promise<User[]> {
    return this.service.findMany({});
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => User, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: 'User',
    action: 'read',
    possession: 'own',
  })
  async user(@Args({ name: 'id', type: () => Int }) id: number): Promise<User> {
    const result = await this.service.findOne({ where: { id } });
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => User)
  @nestAccessControl.UseRoles({
    resource: 'User',
    action: 'delete',
    possession: 'any',
  })
  async deleteUser(
    @Args({ name: 'id', type: () => Int }) id: number,
  ): Promise<User> {
    return this.service.delete({ id: id });
  }

  // @common.UseInterceptors(AclValidateRequestInterceptor)
  // @graphql.Mutation(() => User)
  // @nestAccessControl.UseRoles({
  //   resource: 'User',
  //   action: 'update',
  //   possession: 'any',
  // })
  // async updateUser(@graphql.Args() args: UpdateUserArgs): Promise<User | null> {
  //   try {
  //     return await this.service.update({ where: { id: args.id }, data: args });
  //   } catch (error) {
  //     if (isRecordNotFoundError(error)) {
  //       throw new apollo.ApolloError(
  //         `No resource was found for ${JSON.stringify(args.where)}`,
  //       );
  //     }
  //     throw error;
  //   }
  // }
}
