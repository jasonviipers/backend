import { AuthService } from './auth.service';
import { UserInfo } from './UserInfo';
import { LoginArgs } from './LoginArgs';
import { RegisterArgs } from './RegisterArgs';
export declare class AuthResolver {
    private readonly authService;
    constructor(authService: AuthService);
    login(args: LoginArgs): Promise<UserInfo>;
    signup(args: RegisterArgs): Promise<UserInfo>;
}
