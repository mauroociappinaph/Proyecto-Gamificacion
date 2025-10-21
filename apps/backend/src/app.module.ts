import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { LoggerModule } from 'nestjs-pino';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { AblyModule } from './ably/ably.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    AuthModule,
    AblyModule,
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get<string>('MONGO_URI'),
      }),
      inject: [ConfigService],
    }),
    LoggerModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        pinoHttp: {
          level: configService.get<string>('LOG_LEVEL') || 'debug',
          autoLogging: {
            ignore: (req) => req.url === '/health', // opcional, para no loguear healthchecks
          },
          redact: ['request.headers.authorization'],
          customReceivedMessage: (req) =>
            `Incoming request: ${req.method} ${req.url}`,
          customSuccessMessage: (req, res) =>
            `Request completed: ${req.method} ${req.url} ${res.statusCode}`,
          serializers: {
            req: (req) => ({
              id: req.id,
              method: req.method,
              url: req.url,
              userId: req.userId, // desde el interceptor
              userRole: req.userRole, // desde el interceptor
              userName: req.userName, // desde el interceptor
            }),
          },
          transport:
            process.env.NODE_ENV !== 'production'
              ? {
                  target: 'pino-pretty',
                  options: {
                    colorize: true,
                    singleLine: true,
                    levelFirst: false,
                    translateTime: 'SYS:dd/mm/yyyy HH:MM:ss Z',
                    messageKey: 'msg',
                    errorLikeObjectKeys: ['err', 'error'],
                    ignore:
                      'pid,hostname,context,req,res,responseTime,levelLabel',
                  },
                }
              : undefined,
        },
      }),
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
