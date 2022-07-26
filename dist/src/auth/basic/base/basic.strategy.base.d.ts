import { BasicStrategy as Strategy } from 'passport-http';
import { UserInfo } from 'src/auth/UserInfo';
import { AuthService } from '../../auth.service';
import { IAuthStrategy } from '../../IAuthStrategy';
declare const BasicStrategyBase_base: new (...args: any[]) => Strategy;
export declare class BasicStrategyBase extends BasicStrategyBase_base implements IAuthStrategy {
    protected readonly authService: AuthService;
    constructor(authService: AuthService);
    validate(email: string, password: string): Promise<UserInfo>;
}
export {};
