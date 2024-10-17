import { PlayerModule } from './../../backoffice/src/player/player.module';
import { AuthModule } from './../../backoffice/src/auth/auth.module';
import { Module } from '@nestjs/common';
import { getDbConfig } from '@app/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GameModule } from './game/game.module';

@Module({
  imports: [
    PlayerModule,
    AuthModule,
    TypeOrmModule.forRootAsync({
      useFactory: async () => getDbConfig('casino'),
    }),
    GameModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
