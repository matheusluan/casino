import { Module } from '@nestjs/common';
import { getDbConfig } from '@app/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { ErrorHandlingInterceptor } from '@app/common/interceptors/error-handling.interceptor';

import { GameModule } from './game/game.module';
import { RoleModule } from './role/role.module';
import { StaffModule } from './staff/staff.module';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: async () => getDbConfig('backoffice'),
    }),
    GameModule,
    StaffModule,
    RoleModule,
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
