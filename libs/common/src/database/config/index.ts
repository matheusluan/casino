//Config for TypeORM

import { Category } from '@app/common/entities/Category';
import { Game } from '@app/common/entities/Game';
import { GameCategory } from '@app/common/entities/GameCategory';
import { Player } from '@app/common/entities/Player';
import { Role } from '@app/common/entities/Role';
import { Staff } from '@app/common/entities/Staff';
import { StaffRoles } from '@app/common/entities/StaffRoles';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const getDbConfig = (conn: string): TypeOrmModuleOptions => {
  switch (conn) {
    case 'casino':
      return {
        type: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'postgres',
        password: 'postgres',
        database: 'mydatabase',
        entities: [
          Game,
          Staff,
          Role,
          Player,
          StaffRoles,
          Category,
          GameCategory,
        ],
        synchronize: true,
        autoLoadEntities: true,
      };
    case 'backoffice':
      return {
        type: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'postgres',
        password: 'postgres',
        database: 'mydatabase',
        entities: [
          Game,
          Staff,
          Role,
          Player,
          StaffRoles,
          Category,
          GameCategory,
        ],
        synchronize: true,
        autoLoadEntities: true,
      };
    default:
      break;
  }
};
