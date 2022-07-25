import { forwardRef, Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { AuthResolver } from './auth.resolver';
import { BasicStrategy } from './basic/basic.strategy';
import { PasswordService } from './password.service';
import { JwtStrategy } from './jwt/jwt.strategy';
import { jwtSecretFactory } from './jwt/jwtSecretFactory';
import { TokenService } from './token.service';
import { UserModule } from 'src/user/user.module';
import { SecretsManagerModule } from 'src/providers/secrets/secretsManager.module';
import { SecretsManagerService } from 'src/providers/secrets/secretsManager.service';
import { JWT_EXPIRATION, JWT_SECRET_KEY } from 'src/constants';

@Module({
  imports: [
    forwardRef(() => UserModule),
    PassportModule,
    SecretsManagerModule,
    JwtModule.registerAsync({
      imports: [SecretsManagerModule],
      inject: [SecretsManagerService, ConfigService],
      useFactory: async (
        secretsService: SecretsManagerService,
        configService: ConfigService,
      ) => {
        const secret = await secretsService.getSecret<string>(JWT_SECRET_KEY);
        const expiresIn = configService.get(JWT_EXPIRATION);
        if (!secret) {
          throw new Error("Didn't get a valid jwt secret");
        }
        if (!expiresIn) {
          throw new Error('Jwt expire in value is not valid');
        }
        return {
          secret: secret,
          signOptions: { expiresIn },
        };
      },
    }),
  ],
  providers: [
    AuthService,
    BasicStrategy,
    PasswordService,
    AuthResolver,
    JwtStrategy,
    jwtSecretFactory,
    TokenService,
  ],
  exports: [AuthService, PasswordService],
})
export class AuthModule {}
