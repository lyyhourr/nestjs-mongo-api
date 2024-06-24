"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const swagger_1 = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
async function bootstrap() {
    const PORT = process.env.PORT || 3000;
    const config = new swagger_1.DocumentBuilder()
        .setTitle('rean tver api')
        .setDescription('please work my kak api')
        .setBasePath('/api/v1')
        .setVersion('99999')
        .addBearerAuth()
        .build();
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.enableCors();
    const document = swagger_1.SwaggerModule.createDocument(app, config, {
        ignoreGlobalPrefix: false,
    });
    swagger_1.SwaggerModule.setup('/doc', app, document, {
        swaggerOptions: {
            persistAuthorization: true,
        },
    });
    app.useGlobalPipes(new common_1.ValidationPipe());
    await app.listen(PORT);
    console.log(`Nest is fucking on PORT ${PORT}`);
}
bootstrap();
//# sourceMappingURL=main.js.map