import { UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { UserService } from 'src/user/user.service';
import { IAuthStrategy } from '../../IAuthStrategy';
import { UserInfo } from '../../UserInfo';

export class JwtStrategyBase
  extends PassportStrategy(Strategy)
  implements IAuthStrategy
{
  constructor(
    protected readonly userService: UserService,
    protected readonly secretOrKey: string,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey,
    });
  }

  async validate(payload: UserInfo): Promise<UserInfo> {
    const { email } = payload;
    const user = await this.userService.findOne({
      where: { email },
    });
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}
