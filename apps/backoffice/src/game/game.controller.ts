import { Body, Controller, Param, Post, Put } from '@nestjs/common';
import { GameService } from './game.service';

import {
  CreateGameBody,
  UpdateGameBody,
} from '@app/common/dtos/requests/Game/game-requests';

@Controller('games')
export class GameController {
  constructor(private readonly gameService: GameService) {}

  @Post()
  async create(@Body() body: CreateGameBody) {
    return await this.gameService.create(body);
  }

  @Put(':id')
  async update(@Param('id') param: number, @Body() body: UpdateGameBody) {
    return await this.gameService.update({ id: param }, body);
  }
}
