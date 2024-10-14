import { Body, Controller, Get, Post } from '@nestjs/common';
import { StaffService } from './staff.service';
import { CreateStaffBody } from '@app/common/dtos/staff-requests';

@Controller('staff')
export class StaffController {
  constructor(private readonly service: StaffService) {}

  @Get()
  async getAll() {
    return await this.service.find();
  }

  @Post()
  async create(@Body() body: CreateStaffBody) {
    return await this.service.createWithRoles(body);
  }
}
