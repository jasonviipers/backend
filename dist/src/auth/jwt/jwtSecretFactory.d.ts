import { SecretsManagerService } from '../../providers/secrets/secretsManager.service';
export declare const jwtSecretFactory: {
    provide: string;
    useFactory: (secretsService: SecretsManagerService) => Promise<string>;
    inject: (typeof SecretsManagerService)[];
};
