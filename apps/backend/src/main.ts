import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';
import { Logger } from 'nestjs-pino';
import { LoggerInterceptor } from './common/interceptors/logger.interceptor'; // Importar el interceptor

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { bufferLogs: true });
  app.useGlobalPipes(new ValidationPipe());
  app.useLogger(app.get(Logger));
  app.useGlobalInterceptors(new LoggerInterceptor()); // Registrar el interceptor globalmente
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
