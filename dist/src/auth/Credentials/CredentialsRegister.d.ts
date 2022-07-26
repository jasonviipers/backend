import { User } from 'src/user/entities/user.entity';
export declare class CredentialsRegister implements Partial<User> {
    firstName?: string;
    lastName?: string;
    email: string;
    phone: string;
    password: string;
}
