import { Module } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CategoryController } from './category.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Category } from '@app/common/entities/Category';
import { GameCategoryModule } from '../game-category/game-category.module';

@Module({
  imports: [TypeOrmModule.forFeature([Category]), GameCategoryModule],
  controllers: [CategoryController],
  providers: [CategoryService],
})
export class CategoryModule {}
