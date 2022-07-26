import { AuthService } from '../auth.service';
import { BasicStrategyBase } from './base/basic.strategy.base';
export declare class BasicStrategy extends BasicStrategyBase {
    protected readonly authService: AuthService;
    constructor(authService: AuthService);
}
