import { Module } from '@nestjs/common';
import { GameCategoryService } from './game-category.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GameCategory } from '@app/common/entities/GameCategory';

@Module({
  imports: [TypeOrmModule.forFeature([GameCategory])],
  controllers: [],
  providers: [GameCategoryService],
  exports: [GameCategoryService],
})
export class GameCategoryModule {}
