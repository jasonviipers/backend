import { Injectable } from '@nestjs/common';
import { Prisma, User } from '@prisma/client';
import { PrismaService } from 'nestjs-prisma';
import { transformStringFieldUpdateInput } from 'src/prisma.util';
import { PasswordService } from '../auth/password.service';

@Injectable()
export class UserService {
  constructor(
    protected readonly prisma: PrismaService,
    protected readonly passwordService: PasswordService,
  ) {}

  async findMany<T extends Prisma.UserFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.UserFindManyArgs>,
  ): Promise<User[]> {
    return this.prisma.user.findMany(args);
  }

  async findOne<T extends Prisma.UserFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.UserFindUniqueArgs>,
  ): Promise<User | null> {
    return this.prisma.user.findUnique(args);
  }

  async create<T extends Prisma.UserCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.UserCreateArgs>,
  ): Promise<User> {
    return this.prisma.user.create<T>({
      ...args,

      data: {
        ...args.data,
        password: await this.passwordService.hash(args.data.password),
      },
    });
  }

  async update<T extends Prisma.UserUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.UserUpdateArgs>,
  ): Promise<User> {
    return this.prisma.user.update<T>({
      ...args,

      data: {
        ...args.data,

        password:
          args.data.password &&
          (await transformStringFieldUpdateInput(
            args.data.password,
            (password) => this.passwordService.hash(password),
          )),
      },
    });
  }

  async delete<T extends Prisma.UserDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.UserDeleteArgs>,
  ): Promise<User> {
    return this.prisma.user.delete(args);
  }
}
