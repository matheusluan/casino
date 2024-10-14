import { Module } from '@nestjs/common';
import { getDbConfig } from '@app/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GameModule } from './game/game.module';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: async () => getDbConfig('casino'),
    }),
    GameModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
