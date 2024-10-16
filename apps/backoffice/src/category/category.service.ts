import { CreateCategoryWithGamesBody } from '@app/common/dtos/category-requests';
import { Category } from '@app/common/entities/Category';
import { GenericService } from '@app/common/generic/generic.service';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { GameCategoryService } from '../game-category/game-category.service';

@Injectable()
export class CategoryService extends GenericService<Category> {
  constructor(
    @InjectRepository(Category)
    repo: Repository<Category>,
    private readonly gameCategoryService: GameCategoryService,
  ) {
    super(repo);
  }

  public async getCategoryWithGames(id: number) {
    return this.findOne({
      where: { id },
      relations: ['gameCategories', 'gameCategories.game'],
    });
  }

  public async createWithGames(
    body: CreateCategoryWithGamesBody,
  ): Promise<Category> {
    const { games, ...rest } = body;

    const category = await this.repository.save({ ...rest });

    console.log('category:', category);

    const payload = games.map((item) => ({
      game_id: item,
      category_id: category.id,
    }));

    await this.gameCategoryService.insertMany(payload);

    return category;
  }
}
