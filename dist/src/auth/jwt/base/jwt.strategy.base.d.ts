import { Strategy } from 'passport-jwt';
import { UserService } from 'src/user/user.service';
import { IAuthStrategy } from '../../IAuthStrategy';
import { UserInfo } from '../../UserInfo';
declare const JwtStrategyBase_base: new (...args: any[]) => Strategy;
export declare class JwtStrategyBase extends JwtStrategyBase_base implements IAuthStrategy {
    protected readonly userService: UserService;
    protected readonly secretOrKey: string;
    constructor(userService: UserService, secretOrKey: string);
    validate(payload: UserInfo): Promise<UserInfo>;
}
export {};
