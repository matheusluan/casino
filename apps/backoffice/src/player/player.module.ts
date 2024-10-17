import { PlayerService } from './player.service';
import { PlayerController } from './player.controller';

import { Module } from '@nestjs/common';
import { Player } from '@app/common/entities/Player';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Player])],
  controllers: [PlayerController],
  providers: [PlayerService],
})
export class PlayerModule {}
