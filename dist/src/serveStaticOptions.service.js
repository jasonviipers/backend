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
var ServeStaticOptionsService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServeStaticOptionsService = void 0;
const path = require("path");
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const SERVE_STATIC_ROOT_PATH_VAR = 'SERVE_STATIC_ROOT_PATH';
const DEFAULT_STATIC_MODULE_OPTIONS_LIST = [
    {
        serveRoot: '/swagger',
        rootPath: path.join(__dirname, 'swagger'),
    },
];
let ServeStaticOptionsService = ServeStaticOptionsService_1 = class ServeStaticOptionsService {
    constructor(configService) {
        this.configService = configService;
        this.logger = new common_1.Logger(ServeStaticOptionsService_1.name);
    }
    createLoggerOptions() {
        const serveStaticRootPath = this.configService.get(SERVE_STATIC_ROOT_PATH_VAR);
        if (serveStaticRootPath) {
            const resolvedPath = path.resolve(serveStaticRootPath);
            this.logger.log(`Serving static files from ${resolvedPath}`);
            return [
                ...DEFAULT_STATIC_MODULE_OPTIONS_LIST,
                { rootPath: resolvedPath, exclude: ['/api*', '/graphql'] },
            ];
        }
        return DEFAULT_STATIC_MODULE_OPTIONS_LIST;
    }
};
ServeStaticOptionsService = ServeStaticOptionsService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [config_1.ConfigService])
], ServeStaticOptionsService);
exports.ServeStaticOptionsService = ServeStaticOptionsService;
//# sourceMappingURL=serveStaticOptions.service.js.map