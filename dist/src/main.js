"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const swagger_1 = require("@nestjs/swagger");
const app_module_1 = require("./app.module");
const swagger_2 = require("./swagger");
const { PORT = 3000 } = process.env;
async function main() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule, { cors: true });
    app.setGlobalPrefix('api');
    app.useGlobalPipes(new common_1.ValidationPipe({
        transform: true,
    }));
    const document = swagger_1.SwaggerModule.createDocument(app, swagger_2.swaggerDocumentOptions);
    Object.values(document.paths).forEach((path) => {
        Object.values(path).forEach((method) => {
            if (Array.isArray(method.security) &&
                method.security.includes('isPublic')) {
                method.security = [];
            }
        });
    });
    swagger_1.SwaggerModule.setup(swagger_2.swaggerPath, app, document, swagger_2.swaggerSetupOptions);
    void app.listen(PORT);
    return app;
}
module.exports = main();
//# sourceMappingURL=main.js.map