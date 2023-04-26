import { Logger, VersioningType } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerDocumentOptions, SwaggerModule } from '@nestjs/swagger';
import { environment } from './environments/environment';
import { ValidationPipe } from './helpers/pipes/validation.pipe';
import { AppModule } from './modules/app/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('CHOW API')
    .setDescription('Chow\'s API')
    .setVersion('1.0')
    .addTag('chow')
    .addBearerAuth()
    .build();

  const options: SwaggerDocumentOptions = {
    operationIdFactory: (controllerKey: string, methodKey: string) => methodKey,
  };

  const document = SwaggerModule.createDocument(app, config, options);
  SwaggerModule.setup('api', app, document);

  app.enableVersioning({
    type: VersioningType.URI,
    prefix: '',
  });

  app.useGlobalPipes(new ValidationPipe());

  const port: number = environment.port;
  app.enableCors();
  await app.listen(port);

  Logger.log(`🚀 Application is running on: http://localhost:${port}`);
  Logger.log(`🚀 Running in ${environment.environment} mode`);
}

bootstrap();
