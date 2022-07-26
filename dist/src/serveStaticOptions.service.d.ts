import { ConfigService } from '@nestjs/config';
import { ServeStaticModuleOptions, ServeStaticModuleOptionsFactory } from '@nestjs/serve-static';
export declare class ServeStaticOptionsService implements ServeStaticModuleOptionsFactory {
    private readonly configService;
    private readonly logger;
    constructor(configService: ConfigService);
    createLoggerOptions(): ServeStaticModuleOptions[];
}
