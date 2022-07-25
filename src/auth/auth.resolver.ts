import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import * as common from '@nestjs/common';
import { Auth } from './entities/auth.entity';
import { AuthService } from './auth.service';
import { UserInfo } from './UserInfo';
import { LoginArgs } from './LoginArgs';
import { RegisterArgs } from './RegisterArgs';

@Resolver(() => Auth)
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  @Mutation(() => UserInfo)
  async login(@Args() args: LoginArgs): Promise<UserInfo> {
    return this.authService.login(args.credentials);
  }

  // @Mutation(() => UserInfo)
  // async signup(@Args() args: RegisterArgs): Promise<UserInfo> {
  //   return this.authService.signup({
  //     ...args.credentials,
  //   });
  // }
}
