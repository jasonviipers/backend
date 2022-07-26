"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.swaggerSetupOptions = exports.swaggerDocumentOptions = exports.swaggerPath = void 0;
const swagger_1 = require("@nestjs/swagger");
exports.swaggerPath = 'api';
exports.swaggerDocumentOptions = new swagger_1.DocumentBuilder()
    .setTitle('Sample app')
    .setDescription('Sample application for Freelancer\n\n## Congratulations! Your application is ready.\n  \nPlease note that all endpoints are secured with JWT Bearer authentication.\nBy default, your app comes with one user with the username "admin" and password "admin".\nLearn more in [our docs](https://chatr.fr)')
    .setVersion('8jtbx99t')
    .addBearerAuth()
    .build();
exports.swaggerSetupOptions = {
    swaggerOptions: {
        persistAuthorization: true,
    },
    customCssUrl: '../swagger/swagger.css',
    customfavIcon: '../swagger/favicon.png',
    customSiteTitle: 'Sample app',
};
//# sourceMappingURL=swagger.js.map