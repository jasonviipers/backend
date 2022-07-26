"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const nestjs_prisma_1 = require("nestjs-prisma");
const user_service_1 = require("../user/user.service");
const password_service_1 = require("./password.service");
const token_service_1 = require("./token.service");
let AuthService = class AuthService {
    constructor(userService, passwordService, tokenService, prisma) {
        this.userService = userService;
        this.passwordService = passwordService;
        this.tokenService = tokenService;
        this.prisma = prisma;
    }
    async validateUser(email, password) {
        const user = await this.userService.findOne({
            where: { email },
        });
        if (user && (await this.passwordService.compare(password, user.password))) {
            const { roles } = user;
            return { email, roles };
        }
        return null;
    }
    async login(credentials) {
        const { email, password } = credentials;
        const user = await this.validateUser(credentials.email, credentials.password);
        if (!user) {
            throw new common_1.UnauthorizedException('The passed credentials are incorrect');
        }
        const accessToken = await this.tokenService.createToken(email, password);
        return Object.assign({ accessToken }, user);
    }
    async signup(credentials) {
        const { email, password, firstName, lastName, phone } = credentials;
        const user = await this.userService.create({
            data: {
                email,
                password: await this.passwordService.hash(password),
                firstName,
                lastName,
                phone,
                roles: ['user'],
            },
        });
        if (!user) {
            throw new common_1.UnauthorizedException('Could not create user');
        }
        const accessToken = await this.tokenService.createToken(email, password);
        return Object.assign({ accessToken }, user);
    }
};
AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [user_service_1.UserService,
        password_service_1.PasswordService,
        token_service_1.TokenService,
        nestjs_prisma_1.PrismaService])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map