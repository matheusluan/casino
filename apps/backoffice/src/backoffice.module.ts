import { Module } from '@nestjs/common';
import { getDbConfig } from '@app/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GameModule } from './game/game.module';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { ErrorHandlingInterceptor } from '@app/common/interceptors/error-handling.interceptor';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: async () => getDbConfig('backoffice'),
    }),
    GameModule,
  ],
  controllers: [],
  providers: [
    {
      provide: APP_INTERCEPTOR,
      useClass: ErrorHandlingInterceptor,
    },
  ],
})
export class BackofficeModule {}
