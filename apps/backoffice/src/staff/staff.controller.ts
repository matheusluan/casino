import { Controller, Get, UseGuards } from '@nestjs/common';
import { StaffService } from './staff.service';
import { AuthGuard } from '../auth/auth.guard';

@UseGuards(AuthGuard)
@Controller('staff')
export class StaffController {
  constructor(private readonly service: StaffService) {}

  @Get()
  async getAll() {
    return await this.service.find();
  }
}
