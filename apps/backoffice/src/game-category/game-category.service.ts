import { GameCategory } from '@app/common/entities/GameCategory';
import { GenericService } from '@app/common/generic/generic.service';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class GameCategoryService extends GenericService<GameCategory> {
  constructor(
    @InjectRepository(GameCategory)
    repo: Repository<GameCategory>,
  ) {
    super(repo);
  }
}
