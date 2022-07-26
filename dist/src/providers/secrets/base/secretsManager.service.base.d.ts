import { ConfigService } from '@nestjs/config';
export interface ISecretsManager {
    getSecret: (key: string) => Promise<any | null>;
}
export declare class SecretsManagerServiceBase implements ISecretsManager {
    protected readonly configService: ConfigService;
    constructor(configService: ConfigService);
    getSecret<T>(key: string): Promise<T | null>;
}
