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
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const nestjs_prisma_1 = require("nestjs-prisma");
const prisma_util_1 = require("../prisma.util");
const password_service_1 = require("../auth/password.service");
let UserService = class UserService {
    constructor(prisma, passwordService) {
        this.prisma = prisma;
        this.passwordService = passwordService;
    }
    async findMany(args) {
        return this.prisma.user.findMany(args);
    }
    async findOne(args) {
        return this.prisma.user.findUnique(args);
    }
    async create(args) {
        return this.prisma.user.create(Object.assign(Object.assign({}, args), { data: Object.assign(Object.assign({}, args.data), { password: await this.passwordService.hash(args.data.password) }) }));
    }
    async update(args) {
        return this.prisma.user.update(Object.assign(Object.assign({}, args), { data: Object.assign(Object.assign({}, args.data), { password: args.data.password &&
                    (await (0, prisma_util_1.transformStringFieldUpdateInput)(args.data.password, (password) => this.passwordService.hash(password))) }) }));
    }
    async delete(args) {
        return this.prisma.user.delete(args);
    }
};
UserService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [nestjs_prisma_1.PrismaService,
        password_service_1.PasswordService])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map