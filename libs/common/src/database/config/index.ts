//Config for TypeORM

import { Game } from '@app/common/entities/Game';
import { Player } from '@app/common/entities/player';
import { Role } from '@app/common/entities/Role';
import { Staff } from '@app/common/entities/Staff';
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
        entities: [Game, Staff, Role, Player],
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
        entities: [Game, Staff, Role, Player],
        synchronize: true,
        autoLoadEntities: true,
      };
    default:
      break;
  }
};
