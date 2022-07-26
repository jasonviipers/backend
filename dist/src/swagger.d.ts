export declare const swaggerPath = "api";
export declare const swaggerDocumentOptions: Omit<import("@nestjs/swagger").OpenAPIObject, "paths">;
export declare const swaggerSetupOptions: {
    swaggerOptions: {
        persistAuthorization: boolean;
    };
    customCssUrl: string;
    customfavIcon: string;
    customSiteTitle: string;
};
