import { NestFactory, Reflector } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';
import { Logger } from 'nestjs-pino';
import { LoggerInterceptor } from './common/interceptors/logger.interceptor'; // Importar el interceptor
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'; // Importar Swagger
import { ClerkAuthGuard } from './auth/guards/clerk-auth.guard'; // Importa ClerkAuthGuard

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { bufferLogs: true });
  app.useGlobalPipes(new ValidationPipe());
  app.useLogger(app.get(Logger));
  app.useGlobalInterceptors(new LoggerInterceptor()); // Registrar el interceptor globalmente

  // Configuración de Swagger
  const config = new DocumentBuilder()
    .setTitle('0²6 API')
    .setDescription('API para la plataforma de gamificación y monetización')
    .setVersion('1.0')
    .addBearerAuth() // Si usas autenticación con Bearer Token
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api-docs', app, document);

  // Aplica el ClerkAuthGuard globalmente
  app.useGlobalGuards(new ClerkAuthGuard(new Reflector()));

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
