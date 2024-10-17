import { Player } from '@app/common/entities/Player';
import { GenericService } from '@app/common/generic/generic.service';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class PlayerService extends GenericService<Player> {
  constructor(
    @InjectRepository(Player)
    repo: Repository<Player>,
  ) {
    super(repo);
  }
}
