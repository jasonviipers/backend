import { Module } from '@nestjs/common';
import { MorganModule } from 'nest-morgan';
import { PrismaModule } from 'nestjs-prisma';

import { UserService } from './user.service';
import { UserResolver } from './user.resolver';

@Module({
  imports: [MorganModule, PrismaModule],
  providers: [UserResolver, UserService],
  exports: [PrismaModule, MorganModule, UserService],
})
export class UserModule {}
