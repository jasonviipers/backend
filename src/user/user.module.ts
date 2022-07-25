import { forwardRef, Module } from '@nestjs/common';
import { MorganModule } from 'nest-morgan';
import { PrismaModule } from 'nestjs-prisma';

import { UserService } from './user.service';
import { UserResolver } from './user.resolver';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [forwardRef(() => AuthModule), MorganModule, PrismaModule],
  providers: [UserResolver, UserService],
  exports: [PrismaModule, MorganModule, UserService],
})
export class UserModule {}
