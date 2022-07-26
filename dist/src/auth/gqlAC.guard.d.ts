import { ExecutionContext } from '@nestjs/common';
import { ACGuard } from 'nest-access-control';
export declare class GqlACGuard<User extends any = any> extends ACGuard<User> {
    getUser(context: ExecutionContext): Promise<User>;
}
