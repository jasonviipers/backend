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
import { UserFindManyArgs } from './base/UserFindManyArgs';
import { UserFindUniqueArgs } from './base/UserFindUniqueArgs';
import { CreateUserArgs } from './base/CreateUserArgs';
import { DeleteUserArgs } from './base/DeleteUserArgs';

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
  @graphql.Query(() => [User])
  async users(@graphql.Args() args: UserFindManyArgs): Promise<User[]> {
    return this.service.findMany(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => User, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: 'User',
    action: 'read',
    possession: 'own',
  })
  async user(@graphql.Args() args: UserFindUniqueArgs): Promise<User | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => User)
  @nestAccessControl.UseRoles({
    resource: 'User',
    action: 'create',
    possession: 'any',
  })
  async createUser(@graphql.Args() args: CreateUserArgs): Promise<User> {
    return await this.service.create({
      ...args,
      data: {
        email: args.data.email,
        password: args.data.password,
        roles: args.data.roles,
        firstName: args.data.firstName,
        lastName: args.data.lastName,
        phone: args.data.phone,
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => User)
  @nestAccessControl.UseRoles({
    resource: 'User',
    action: 'update',
    possession: 'any',
  })
  async updateUser(@graphql.Args() args: UpdateUserArgs): Promise<User | null> {
    try {
      return await this.service.update({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`,
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => User)
  @nestAccessControl.UseRoles({
    resource: 'User',
    action: 'delete',
    possession: 'any',
  })
  async deleteUser(@graphql.Args() args: DeleteUserArgs): Promise<User | null> {
    try {
      return await this.service.delete(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`,
        );
      }
      throw error;
    }
  }
}
