"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const apollo_server_core_1 = require("apollo-server-core");
const path_1 = require("path");
const config_1 = require("@nestjs/config");
const serve_static_1 = require("@nestjs/serve-static");
const apollo_1 = require("@nestjs/apollo");
const graphql_1 = require("@nestjs/graphql");
const nestjs_prisma_1 = require("nestjs-prisma");
const nest_morgan_1 = require("nest-morgan");
const user_module_1 = require("./user/user.module");
const serveStaticOptions_service_1 = require("./serveStaticOptions.service");
const auth_module_1 = require("./auth/auth.module");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({ isGlobal: true }),
            serve_static_1.ServeStaticModule.forRootAsync({
                useClass: serveStaticOptions_service_1.ServeStaticOptionsService,
            }),
            graphql_1.GraphQLModule.forRootAsync({
                driver: apollo_1.ApolloDriver,
                useFactory: () => ({
                    playground: false,
                    plugins: [(0, apollo_server_core_1.ApolloServerPluginLandingPageLocalDefault)()],
                    autoSchemaFile: (0, path_1.join)(process.cwd(), 'src/schema.gql'),
                    sortSchema: true,
                }),
                imports: [config_1.ConfigModule],
                inject: [config_1.ConfigService],
            }),
            user_module_1.UserModule,
            nest_morgan_1.MorganModule,
            auth_module_1.AuthModule,
        ],
        controllers: [],
        providers: [nestjs_prisma_1.PrismaService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map