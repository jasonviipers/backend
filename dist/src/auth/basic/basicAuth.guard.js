"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BasicAuthGuard = void 0;
const passport_1 = require("@nestjs/passport");
class BasicAuthGuard extends (0, passport_1.AuthGuard)('basic') {
}
exports.BasicAuthGuard = BasicAuthGuard;
//# sourceMappingURL=basicAuth.guard.js.map