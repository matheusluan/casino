import { Game } from '@app/common/entities/Game';
import { GenericService } from '@app/common/generic/generic.typeorm.service';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class GameService extends GenericService<Game> {
  constructor(
    @InjectRepository(Game)
    gameRepository: Repository<Game>,
  ) {
    super(gameRepository);
  }
}
