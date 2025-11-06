import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { CoreModule } from './core/core.module';

async function bootstrap() {
  const app = await NestFactory.create(CoreModule, { rawBody: true });

  app.setGlobalPrefix('api');

  app.useGlobalPipes(new ValidationPipe());

  app.enableCors({
    origin: [
      'http://localhost:5174',
      'http://localhost:5173',
      'http://localhost:3000',
    ],
    credentials: true,
  });
  // await app.listen(process.env.PORT ?? 3000);
  await app.listen(4000);
}
bootstrap();
