import { Body, Controller, Get, Post } from '@nestjs/common';
import { RoleService } from './role.service';
import { CreateRoleBody } from '@app/common/dtos/role-requests';

@Controller('role')
export class RoleController {
  constructor(private readonly service: RoleService) {}

  @Get()
  async getAll() {
    return await this.service.find();
  }

  @Post()
  async create(@Body() body: CreateRoleBody) {
    return await this.service.create(body);
  }
}
