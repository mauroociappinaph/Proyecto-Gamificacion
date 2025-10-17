import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { LoggerModule } from 'nestjs-pino';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get<string>('MONGO_URI'),
      }),
      inject: [ConfigService],
    }),
    LoggerModule.forRoot({
      pinoHttp: {
        level: process.env.LOG_LEVEL || 'debug',
        redact: ['request.headers.authorization'],
        serializers: {
          req: (req) => ({
            id: req.id,
            method: req.method,
            url: req.url,
            userId: req.userId,
            userRole: req.userRole,
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
                  translateTime: "yyyy-MM-dd'T'HH:mm:ss.l'Z'",
                  messageFormat:
                    '{time} User:{req.userId} ({req.userRole}) | {req.method} {req.url} | {msg}',
                  ignore:
                    'pid,hostname,context,req,res,responseTime,req.userId,req.userRole',
                  errorLikeObjectKeys: ['err', 'error'],
                },
              }
            : undefined,
      },
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
