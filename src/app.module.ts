import { Module } from '@nestjs/common';
import { ApolloServerPluginLandingPageLocalDefault } from 'apollo-server-core';
import { join } from 'path';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ServeStaticModule } from '@nestjs/serve-static';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { GraphQLModule } from '@nestjs/graphql';
import { PrismaService } from 'nestjs-prisma';
import { MorganInterceptor, MorganModule } from 'nest-morgan';
import { APP_INTERCEPTOR } from '@nestjs/core';

import { UserModule } from './user/user.module';
import { ServeStaticOptionsService } from './serveStaticOptions.service';
import { AuthModule } from './auth/auth.module';
import { ACLModule } from './auth/acl.module';
import { SecretsManagerModule } from './providers/secrets/secretsManager.module';
import { FreelancerModule } from './freelancer/freelancer.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    ServeStaticModule.forRootAsync({
      useClass: ServeStaticOptionsService,
    }),
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
      useFactory: () => ({
        playground: false,
        plugins: [ApolloServerPluginLandingPageLocalDefault()],
        autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
        sortSchema: true,
      }),
      imports: [ConfigModule],
      inject: [ConfigService],
    }),
    UserModule,
    MorganModule,
    AuthModule,
    ACLModule,
    SecretsManagerModule,
    FreelancerModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
