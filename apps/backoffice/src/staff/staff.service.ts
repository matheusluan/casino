import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';

import { Staff } from '@app/common/entities/Staff';
import { CreateStaffBody } from '@app/common/dtos/staff-requests';
import { GenericService } from '@app/common/generic/generic.service';
import { Role } from '@app/common/entities/Role';

@Injectable()
export class StaffService extends GenericService<Staff> {
  constructor(
    @InjectRepository(Staff)
    repo: Repository<Staff>,
  ) {
    super(repo);
  }

  public async createWithRoles(body: CreateStaffBody): Promise<Staff> {
    const { password, roles, ...rest } = body;

    //Encript password
    const hashedPassword = await bcrypt.hash(password, 10);

    const staff = await this.repository.create({
      ...rest,
      password: hashedPassword,
    });

    return staff;
  }
}
