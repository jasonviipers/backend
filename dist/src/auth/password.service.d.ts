import { ConfigService } from '@nestjs/config';
export declare type Salt = string | number;
export declare class PasswordService {
    private configService;
    salt: Salt;
    constructor(configService: ConfigService);
    compare(password: string, encrypted: string): Promise<boolean>;
    hash(password: string): Promise<string>;
}
export declare function parseSalt(value: string | undefined): Salt;
