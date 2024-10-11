import { Injectable } from '@nestjs/common';
import { Game, PrismaClient } from '@prisma/client';
import GenericService from '@app/common/generic/generic.service';

@Injectable()
export class GameService extends GenericService<Game> {
  constructor() {
    super(new PrismaClient().game);
  }
}
