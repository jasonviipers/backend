import { UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { BasicStrategy as Strategy } from 'passport-http';
import { UserInfo } from 'src/auth/UserInfo';
import { AuthService } from '../../auth.service';
import { IAuthStrategy } from '../../IAuthStrategy';

export class BasicStrategyBase
  extends PassportStrategy(Strategy)
  implements IAuthStrategy
{
  constructor(protected readonly authService: AuthService) {
    super();
  }

  async validate(email: string, password: string): Promise<UserInfo> {
    const user = await this.authService.validateUser(email, password);
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}
