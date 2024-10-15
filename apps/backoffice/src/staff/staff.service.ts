import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { In, Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';

import { CreateStaffBody } from '@app/common/dtos/staff-requests';

import { Staff } from '@app/common/entities/Staff';
import { RoleService } from '../role/role.service';
import { GenericService } from '@app/common/generic/generic.service';

@Injectable()
export class StaffService extends GenericService<Staff> {
  constructor(
    @InjectRepository(Staff)
    repo: Repository<Staff>,
    private readonly roleService: RoleService,
  ) {
    super(repo);
  }

  public async createWithRoles(body: CreateStaffBody): Promise<Staff> {
    const { password, roles, ...rest } = body;

    const hashedPassword = await bcrypt.hash(password, 10);

    const rolesEntities = await this.roleService.find({
      where: {
        id: In(roles),
      },
    });

    const staff = this.repository.create({
      ...rest,
      staffRoles: rolesEntities,
      password: hashedPassword,
    });

    return this.repository.save(staff);
  }
}
