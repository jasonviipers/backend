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
exports.UserResolver = void 0;
const graphql = require("@nestjs/graphql");
const apollo = require("apollo-server-express");
const nestAccessControl = require("nest-access-control");
const common = require("@nestjs/common");
const user_service_1 = require("./user.service");
const user_entity_1 = require("./entities/user.entity");
const gqlDefaultAuth_guard_1 = require("../auth/gqlDefaultAuth.guard");
const gqlACGuard = require("../auth/gqlAC.guard");
const aclFilterResponse_interceptor_1 = require("../interceptors/aclFilterResponse.interceptor");
const aclValidateRequest_interceptor_1 = require("../interceptors/aclValidateRequest.interceptor");
const UpdateUserArgs_1 = require("./base/UpdateUserArgs");
const prisma_util_1 = require("../prisma.util");
const UserFindManyArgs_1 = require("./base/UserFindManyArgs");
const UserFindUniqueArgs_1 = require("./base/UserFindUniqueArgs");
const CreateUserArgs_1 = require("./base/CreateUserArgs");
const DeleteUserArgs_1 = require("./base/DeleteUserArgs");
let UserResolver = class UserResolver {
    constructor(service, rolesBuilder) {
        this.service = service;
        this.rolesBuilder = rolesBuilder;
    }
    async users(args) {
        return this.service.findMany(args);
    }
    async user(args) {
        const result = await this.service.findOne(args);
        if (result === null) {
            return null;
        }
        return result;
    }
    async createUser(args) {
        return await this.service.create(Object.assign(Object.assign({}, args), { data: {
                email: args.data.email,
                password: args.data.password,
                roles: args.data.roles,
                firstName: args.data.firstName,
                lastName: args.data.lastName,
                phone: args.data.phone,
            } }));
    }
    async updateUser(args) {
        try {
            return await this.service.update(Object.assign(Object.assign({}, args), { data: args.data }));
        }
        catch (error) {
            if ((0, prisma_util_1.isRecordNotFoundError)(error)) {
                throw new apollo.ApolloError(`No resource was found for ${JSON.stringify(args.where)}`);
            }
            throw error;
        }
    }
    async deleteUser(args) {
        try {
            return await this.service.delete(args);
        }
        catch (error) {
            if ((0, prisma_util_1.isRecordNotFoundError)(error)) {
                throw new apollo.ApolloError(`No resource was found for ${JSON.stringify(args.where)}`);
            }
            throw error;
        }
    }
};
__decorate([
    common.UseInterceptors(aclFilterResponse_interceptor_1.AclFilterResponseInterceptor),
    graphql.Query(() => [user_entity_1.User]),
    nestAccessControl.UseRoles({
        resource: 'User',
        action: 'read',
        possession: 'any',
    }),
    graphql.Query(() => [user_entity_1.User]),
    __param(0, graphql.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [UserFindManyArgs_1.UserFindManyArgs]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "users", null);
__decorate([
    common.UseInterceptors(aclFilterResponse_interceptor_1.AclFilterResponseInterceptor),
    graphql.Query(() => user_entity_1.User, { nullable: true }),
    nestAccessControl.UseRoles({
        resource: 'User',
        action: 'read',
        possession: 'own',
    }),
    __param(0, graphql.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [UserFindUniqueArgs_1.UserFindUniqueArgs]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "user", null);
__decorate([
    common.UseInterceptors(aclValidateRequest_interceptor_1.AclValidateRequestInterceptor),
    graphql.Mutation(() => user_entity_1.User),
    nestAccessControl.UseRoles({
        resource: 'User',
        action: 'create',
        possession: 'any',
    }),
    __param(0, graphql.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [CreateUserArgs_1.CreateUserArgs]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "createUser", null);
__decorate([
    common.UseInterceptors(aclValidateRequest_interceptor_1.AclValidateRequestInterceptor),
    graphql.Mutation(() => user_entity_1.User),
    nestAccessControl.UseRoles({
        resource: 'User',
        action: 'update',
        possession: 'any',
    }),
    __param(0, graphql.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [UpdateUserArgs_1.UpdateUserArgs]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "updateUser", null);
__decorate([
    graphql.Mutation(() => user_entity_1.User),
    nestAccessControl.UseRoles({
        resource: 'User',
        action: 'delete',
        possession: 'any',
    }),
    __param(0, graphql.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [DeleteUserArgs_1.DeleteUserArgs]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "deleteUser", null);
UserResolver = __decorate([
    graphql.Resolver(() => user_entity_1.User),
    common.UseGuards(gqlDefaultAuth_guard_1.GqlDefaultAuthGuard, gqlACGuard.GqlACGuard),
    __param(1, nestAccessControl.InjectRolesBuilder()),
    __metadata("design:paramtypes", [user_service_1.UserService, nestAccessControl.RolesBuilder])
], UserResolver);
exports.UserResolver = UserResolver;
//# sourceMappingURL=user.resolver.js.map