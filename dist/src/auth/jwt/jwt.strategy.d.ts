import { UserService } from 'src/user/user.service';
import { JwtStrategyBase } from './base/jwt.strategy.base';
export declare class JwtStrategy extends JwtStrategyBase {
    protected readonly userService: UserService;
    constructor(userService: UserService, secretOrKey: string);
}
