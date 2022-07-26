import { User } from 'src/user/entities/user.entity';
export declare class UserInfo implements Partial<User> {
    email: string;
    roles: string[];
    accessToken?: string;
}
