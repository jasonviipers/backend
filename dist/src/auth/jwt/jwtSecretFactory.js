"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.jwtSecretFactory = void 0;
const constants_1 = require("../../constants");
const secretsManager_service_1 = require("../../providers/secrets/secretsManager.service");
exports.jwtSecretFactory = {
    provide: constants_1.JWT_SECRET_KEY,
    useFactory: async (secretsService) => {
        const secret = await secretsService.getSecret(constants_1.JWT_SECRET_KEY);
        if (secret) {
            return secret;
        }
        throw new Error('jwtSecretFactory missing secret');
    },
    inject: [secretsManager_service_1.SecretsManagerService],
};
//# sourceMappingURL=jwtSecretFactory.js.map