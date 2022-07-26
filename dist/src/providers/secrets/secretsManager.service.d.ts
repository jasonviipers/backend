import { ConfigService } from '@nestjs/config';
import { SecretsManagerServiceBase } from './base/secretsManager.service.base';
export declare class SecretsManagerService extends SecretsManagerServiceBase {
    protected readonly configService: ConfigService;
    constructor(configService: ConfigService);
}
