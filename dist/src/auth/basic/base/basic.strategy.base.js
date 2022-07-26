"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BasicStrategyBase = void 0;
const common_1 = require("@nestjs/common");
const passport_1 = require("@nestjs/passport");
const passport_http_1 = require("passport-http");
class BasicStrategyBase extends (0, passport_1.PassportStrategy)(passport_http_1.BasicStrategy) {
    constructor(authService) {
        super();
        this.authService = authService;
    }
    async validate(email, password) {
        const user = await this.authService.validateUser(email, password);
        if (!user) {
            throw new common_1.UnauthorizedException();
        }
        return user;
    }
}
exports.BasicStrategyBase = BasicStrategyBase;
//# sourceMappingURL=basic.strategy.base.js.map