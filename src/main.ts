import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const PORT = process.env.PORT || 3000;

  const config = new DocumentBuilder()
    .setTitle('rean tver api')
    .setDescription('please work my kak api')
    .setBasePath('/api/v1')
    .setVersion('99999')
    // apply bearer token input
    .addBearerAuth()
    .build();

  const app = await NestFactory.create(AppModule);

  app.enableCors();

  const document = SwaggerModule.createDocument(app, config, {
    // dont event know tf is this
    ignoreGlobalPrefix: false,
  });

  // setup swagger
  SwaggerModule.setup('/doc', app, document, {
    swaggerOptions: {
      // basePath: 'api/v1',
      persistAuthorization: true,
    },
  });

  // setup  validation
  app.useGlobalPipes(new ValidationPipe());

  // api global prefix
  // app.setGlobalPrefix('/api/v1');

  await app.listen(PORT);
  console.log(`Nest is fucking on PORT ${PORT}`);
}
bootstrap();
