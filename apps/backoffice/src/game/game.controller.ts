import { Body, Controller, Post } from '@nestjs/common';
import { GameService } from './game.service';
import { CreateGameBody } from '@app/common/dtos/requests/posts/create-game-request';

@Controller('games')
export class GameController {
  constructor(private readonly gameService: GameService) {}

  @Post()
  async create(@Body() body: CreateGameBody) {
    return await this.gameService.create(body);
  }
}
