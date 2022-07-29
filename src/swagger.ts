import { DocumentBuilder } from '@nestjs/swagger';

export const swaggerPath = 'api';

export const swaggerDocumentOptions = new DocumentBuilder()
  .setTitle('Sample app')
  .setDescription(
    'Sample application for Freelancer\n\n## Congratulations! Your application is ready.\n  \nPlease note that all endpoints are secured with JWT Bearer authentication.\nBy default, your app comes with one user with the email "admin@admin.com" and password "admin".\nLearn more in [our docs](https://chatr.fr)',
  )
  .setVersion('8jtbx99t')
  .addBearerAuth()
  .build();

export const swaggerSetupOptions = {
  swaggerOptions: {
    persistAuthorization: true,
  },
  customCssUrl: '../swagger/swagger.css',
  customfavIcon: '../swagger/favicon.png',
  customSiteTitle: 'Sample app',
};
