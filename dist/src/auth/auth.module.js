"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const jwt_1 = require("@nestjs/jwt");
const passport_1 = require("@nestjs/passport");
const auth_service_1 = require("./auth.service");
const auth_resolver_1 = require("./auth.resolver");
const basic_strategy_1 = require("./basic/basic.strategy");
const password_service_1 = require("./password.service");
const jwt_strategy_1 = require("./jwt/jwt.strategy");
const jwtSecretFactory_1 = require("./jwt/jwtSecretFactory");
const token_service_1 = require("./token.service");
const user_module_1 = require("../user/user.module");
const secretsManager_module_1 = require("../providers/secrets/secretsManager.module");
const secretsManager_service_1 = require("../providers/secrets/secretsManager.service");
const constants_1 = require("../constants");
let AuthModule = class AuthModule {
};
AuthModule = __decorate([
    (0, common_1.Module)({
        imports: [
            (0, common_1.forwardRef)(() => user_module_1.UserModule),
            passport_1.PassportModule,
            secretsManager_module_1.SecretsManagerModule,
            jwt_1.JwtModule.registerAsync({
                imports: [secretsManager_module_1.SecretsManagerModule],
                inject: [secretsManager_service_1.SecretsManagerService, config_1.ConfigService],
                useFactory: async (secretsService, configService) => {
                    const secret = await secretsService.getSecret(constants_1.JWT_SECRET_KEY);
                    const expiresIn = configService.get(constants_1.JWT_EXPIRATION);
                    if (!secret) {
                        throw new Error("Didn't get a valid jwt secret");
                    }
                    if (!expiresIn) {
                        throw new Error('Jwt expire in value is not valid');
                    }
                    return {
                        secret: secret,
                        signOptions: { expiresIn },
                    };
                },
            }),
        ],
        providers: [
            auth_service_1.AuthService,
            basic_strategy_1.BasicStrategy,
            password_service_1.PasswordService,
            auth_resolver_1.AuthResolver,
            jwt_strategy_1.JwtStrategy,
            jwtSecretFactory_1.jwtSecretFactory,
            token_service_1.TokenService,
        ],
        exports: [auth_service_1.AuthService, password_service_1.PasswordService],
    })
], AuthModule);
exports.AuthModule = AuthModule;
//# sourceMappingURL=auth.module.js.map