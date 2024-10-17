import { Controller, Get } from '@nestjs/common';
import { StaffService } from './staff.service';

@Controller('staff')
export class StaffController {
  constructor(private readonly service: StaffService) {}

  @Get()
  async getAll() {
    return await this.service.find();
  }
}
