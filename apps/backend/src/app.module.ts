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
    LoggerModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        pinoHttp: {
          level: configService.get<string>('LOG_LEVEL') || 'debug',
          redact: ['request.headers.authorization'],
          serializers: {
            req: (req) => ({
              id: req.id,
              method: req.method,
              url: req.url,
              userId: req.userId, // Mantener para el interceptor
              userRole: req.userRole, // Mantener para el interceptor
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
                    translateTime: "UTC:yyyy-mm-dd'T'HH:MM:ss.l'Z'",
                    messageKey: 'msg',
                    errorLikeObjectKeys: ['err', 'error'],
                    ignore: 'pid,hostname,context,req.id,req.stream,res.stream',
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
