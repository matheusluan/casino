/*
https://docs.nestjs.com/controllers#controllers
*/

import { Controller, Get, UseGuards } from '@nestjs/common';
import { PlayerService } from './player.service';
import { AuthGuard } from '../auth/auth.guard';

@UseGuards(AuthGuard)
@Controller('player')
export class PlayerController {
  constructor(private readonly service: PlayerService) {}

  @Get()
  async getAll() {
    return await this.service.find();
  }

  @Get('/count')
  async getCount() {
    return await this.service.count();
  }

  @Get('/last')
  async getLast() {
    return await this.service.find({ order: { createdAt: 'desc' }, take: 5 });
  }
}
