"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SecretsManagerServiceBase = void 0;
class SecretsManagerServiceBase {
    constructor(configService) {
        this.configService = configService;
    }
    async getSecret(key) {
        if (!key) {
            throw new Error("Didn't got the key");
        }
        const value = this.configService.get(key);
        if (value) {
            return value;
        }
        return null;
    }
}
exports.SecretsManagerServiceBase = SecretsManagerServiceBase;
//# sourceMappingURL=secretsManager.service.base.js.map