import { PrismaService } from 'nestjs-prisma';
import { UserService } from 'src/user/user.service';
import { Credentials } from './Credentials/Credentials';
import { CredentialsRegister } from './Credentials/CredentialsRegister';
import { PasswordService } from './password.service';
import { TokenService } from './token.service';
import { UserInfo } from './UserInfo';
export declare class AuthService {
    private readonly userService;
    private readonly passwordService;
    private readonly tokenService;
    protected readonly prisma: PrismaService;
    constructor(userService: UserService, passwordService: PasswordService, tokenService: TokenService, prisma: PrismaService);
    validateUser(email: string, password: string): Promise<UserInfo | null>;
    login(credentials: Credentials): Promise<UserInfo>;
    signup(credentials: CredentialsRegister): Promise<UserInfo>;
}
