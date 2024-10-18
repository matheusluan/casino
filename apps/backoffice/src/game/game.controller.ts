import {
  Body,
  Controller,
  Get,
  NotFoundException,
  Param,
  Post,
  Put,
  Query,
  UseGuards,
} from '@nestjs/common';
import { GameService } from './game.service';

import { CreateGameBody, UpdateGameBody } from '@app/common/dtos/game-requests';
import { AuthGuard } from '../auth/auth.guard';
import { PaginateDto } from '@app/common/dtos/paginate-dto';
import { Like } from 'typeorm';

@UseGuards(AuthGuard)
@Controller('game')
export class GameController {
  constructor(private readonly service: GameService) {}

  @Get()
  async get(@Query() paginateDto: PaginateDto) {
    const { filter } = paginateDto;

    if (filter) {
      return await this.service.paginate(paginateDto, {
        where: {
          name: Like(`%${filter}%`),
        },
      });
    } else {
      return await this.service.paginate(paginateDto);
    }
  }

  @Post()
  async create(@Body() body: CreateGameBody) {
    return await this.service.create(body);
  }

  @Put(':id')
  async update(@Param('id') param: number, @Body() body: UpdateGameBody) {
    return await this.service.update({ id: param }, body);
  }
  @Put('/switch/:id')
  async swith(@Param('id') id: number) {
    console.log(id);
    const game = await this.service.findOne({ where: { id } });

    if (!game) throw new NotFoundException();

    return await this.service.update({ id }, { isActive: !game.isActive });
  }

  @Get('/count')
  async getCount() {
    return await this.service.count();
  }
}
