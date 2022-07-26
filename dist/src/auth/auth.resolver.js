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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const auth_entity_1 = require("./entities/auth.entity");
const auth_service_1 = require("./auth.service");
const UserInfo_1 = require("./UserInfo");
const LoginArgs_1 = require("./LoginArgs");
const RegisterArgs_1 = require("./RegisterArgs");
let AuthResolver = class AuthResolver {
    constructor(authService) {
        this.authService = authService;
    }
    async login(args) {
        return this.authService.login(args.credentials);
    }
    async signup(args) {
        return this.authService.signup(Object.assign({}, args.credentials));
    }
};
__decorate([
    (0, graphql_1.Mutation)(() => UserInfo_1.UserInfo),
    __param(0, (0, graphql_1.Args)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [LoginArgs_1.LoginArgs]),
    __metadata("design:returntype", Promise)
], AuthResolver.prototype, "login", null);
__decorate([
    (0, graphql_1.Mutation)(() => UserInfo_1.UserInfo),
    __param(0, (0, graphql_1.Args)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [RegisterArgs_1.RegisterArgs]),
    __metadata("design:returntype", Promise)
], AuthResolver.prototype, "signup", null);
AuthResolver = __decorate([
    (0, graphql_1.Resolver)(() => auth_entity_1.Auth),
    __metadata("design:paramtypes", [auth_service_1.AuthService])
], AuthResolver);
exports.AuthResolver = AuthResolver;
//# sourceMappingURL=auth.resolver.js.map