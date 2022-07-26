import { Prisma, User } from '@prisma/client';
import { PrismaService } from 'nestjs-prisma';
import { PasswordService } from '../auth/password.service';
export declare class UserService {
    protected readonly prisma: PrismaService;
    protected readonly passwordService: PasswordService;
    constructor(prisma: PrismaService, passwordService: PasswordService);
    findMany<T extends Prisma.UserFindManyArgs>(args: Prisma.SelectSubset<T, Prisma.UserFindManyArgs>): Promise<User[]>;
    findOne<T extends Prisma.UserFindUniqueArgs>(args: Prisma.SelectSubset<T, Prisma.UserFindUniqueArgs>): Promise<User | null>;
    create<T extends Prisma.UserCreateArgs>(args: Prisma.SelectSubset<T, Prisma.UserCreateArgs>): Promise<User>;
    update<T extends Prisma.UserUpdateArgs>(args: Prisma.SelectSubset<T, Prisma.UserUpdateArgs>): Promise<User>;
    delete<T extends Prisma.UserDeleteArgs>(args: Prisma.SelectSubset<T, Prisma.UserDeleteArgs>): Promise<User>;
}
