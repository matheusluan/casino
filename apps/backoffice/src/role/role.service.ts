import { Role } from '@app/common/entities/Role';
import { GenericService } from '@app/common/generic/generic.service';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class RoleService extends GenericService<Role> {
  constructor(
    @InjectRepository(Role)
    repo: Repository<Role>,
  ) {
    super(repo);
  }
}
