import { NestFactory } from '@nestjs/core';
import { BackofficeModule } from './backoffice.module';

async function bootstrap() {
  const app = await NestFactory.create(BackofficeModule);
  await app.listen(8000);
}
bootstrap();
