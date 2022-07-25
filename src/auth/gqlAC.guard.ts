import { ExecutionContext } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { ACGuard } from 'nest-access-control';

// eslint-disable-next-line @typescript-eslint/no-unnecessary-type-constraint
export class GqlACGuard<User extends any = any> extends ACGuard<User> {
  async getUser(context: ExecutionContext): Promise<User> {
    const ctx = GqlExecutionContext.create(context);
    const request = ctx.getContext<{ req: { user: User } }>().req;
    return request.user;
  }
}
