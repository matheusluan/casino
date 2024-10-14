import { Body, Controller, Param, Post, Put } from '@nestjs/common';
import { GameService } from './game.service';

import { CreateGameBody, UpdateGameBody } from '@app/common/dtos/game-requests';

@Controller('games')
export class GameController {
  constructor(private readonly service: GameService) {}

  @Post()
  async create(@Body() body: CreateGameBody) {
    return await this.service.create(body);
  }

  @Put(':id')
  async update(@Param('id') param: number, @Body() body: UpdateGameBody) {
    return await this.service.update({ id: param }, body);
  }
}
