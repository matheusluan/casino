import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { CategoryService } from './category.service';

import {
  CreateCategoryBody,
  CreateCategoryWithGamesBody,
  UpdateCategoryBody,
} from '@app/common/dtos/category-requests';
import { AuthGuard } from '../auth/auth.guard';

@UseGuards(AuthGuard)
@Controller('category')
export class CategoryController {
  constructor(private readonly service: CategoryService) {}

  @Get()
  async get() {
    return await this.service.find();
  }

  @Get(':id')
  async getByIdWithGames(@Param('id') id: number) {
    return await this.service.getCategoryWithGames(id);
  }

  @Post()
  async create(@Body() body: CreateCategoryBody) {
    return await this.service.create(body);
  }

  @Put(':id')
  async update(@Param('id') param: number, @Body() body: UpdateCategoryBody) {
    return await this.service.update({ id: param }, body);
  }

  @Post('create_with_games')
  async createWithGames(@Body() body: CreateCategoryWithGamesBody) {
    return await this.service.createWithGames(body);
  }
}
