"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JwtStrategyBase = void 0;
const common_1 = require("@nestjs/common");
const passport_1 = require("@nestjs/passport");
const passport_jwt_1 = require("passport-jwt");
class JwtStrategyBase extends (0, passport_1.PassportStrategy)(passport_jwt_1.Strategy) {
    constructor(userService, secretOrKey) {
        super({
            jwtFromRequest: passport_jwt_1.ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey,
        });
        this.userService = userService;
        this.secretOrKey = secretOrKey;
    }
    async validate(payload) {
        const { email } = payload;
        const user = await this.userService.findOne({
            where: { email },
        });
        if (!user) {
            throw new common_1.UnauthorizedException();
        }
        return user;
    }
}
exports.JwtStrategyBase = JwtStrategyBase;
//# sourceMappingURL=jwt.strategy.base.js.map