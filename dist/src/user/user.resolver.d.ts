import * as nestAccessControl from 'nest-access-control';
import { UserService } from './user.service';
import { User } from './entities/user.entity';
import { UpdateUserArgs } from './base/UpdateUserArgs';
import { UserFindManyArgs } from './base/UserFindManyArgs';
import { UserFindUniqueArgs } from './base/UserFindUniqueArgs';
import { CreateUserArgs } from './base/CreateUserArgs';
import { DeleteUserArgs } from './base/DeleteUserArgs';
export declare class UserResolver {
    protected readonly service: UserService;
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder;
    constructor(service: UserService, rolesBuilder: nestAccessControl.RolesBuilder);
    users(args: UserFindManyArgs): Promise<User[]>;
    user(args: UserFindUniqueArgs): Promise<User | null>;
    createUser(args: CreateUserArgs): Promise<User>;
    updateUser(args: UpdateUserArgs): Promise<User | null>;
    deleteUser(args: DeleteUserArgs): Promise<User | null>;
}
