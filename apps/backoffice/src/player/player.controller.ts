/*
https://docs.nestjs.com/controllers#controllers
*/

import { Controller, Get, Query, UseGuards } from '@nestjs/common';
import { PlayerService } from './player.service';
import { AuthGuard } from '../auth/auth.guard';
import { PaginateDto } from '@app/common/dtos/paginate-dto';

@UseGuards(AuthGuard)
@Controller('player')
export class PlayerController {
  constructor(private readonly service: PlayerService) {}

  @Get()
  async get(@Query() paginateDto: PaginateDto) {
    return await this.service.paginate(paginateDto);
  }

  @Get('/count')
  async getCount() {
    return await this.service.count();
  }

  @Get('/last')
  async getLast(@Query() paginateDto: PaginateDto) {
    return await this.service.paginate(paginateDto, {
      order: { createdAt: 'desc' },
      take: 5,
    });
  }
}
