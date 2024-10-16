import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { GameService } from './game.service';

import { CreateGameBody, UpdateGameBody } from '@app/common/dtos/game-requests';

@Controller('game')
export class GameController {
  constructor(private readonly service: GameService) {}

  @Get()
  async get() {
    return await this.service.find();
  }

  @Post()
  async create(@Body() body: CreateGameBody) {
    return await this.service.create(body);
  }

  @Put(':id')
  async update(@Param('id') param: number, @Body() body: UpdateGameBody) {
    return await this.service.update({ id: param }, body);
  }
}
