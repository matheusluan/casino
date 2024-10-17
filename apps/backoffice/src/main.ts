import { NestFactory } from '@nestjs/core';
import { BackofficeModule } from './backoffice.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(BackofficeModule);

  app.useGlobalPipes(new ValidationPipe());
  app.enableCors();
  await app.listen(8000);
}
bootstrap();
