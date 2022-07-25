import { forwardRef, Module } from '@nestjs/common';
import { MorganModule } from 'nest-morgan';
import { PrismaModule } from 'nestjs-prisma';

import { UserService } from './user.service';
import { UserResolver } from './user.resolver';
import { AuthModule } from 'src/auth/auth.module';
import { ACLModule } from 'src/auth/acl.module';

@Module({
  imports: [
    forwardRef(() => AuthModule),
    MorganModule,
    PrismaModule,
    ACLModule,
  ],
  providers: [UserResolver, UserService],
  exports: [PrismaModule, MorganModule, UserService, ACLModule],
})
export class UserModule {}
