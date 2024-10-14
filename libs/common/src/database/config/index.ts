//Config for TypeORM

import { Game } from '@app/common/entities/Game';
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
        entities: [Game],
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
        entities: [Game],
        synchronize: true,
        autoLoadEntities: true,
      };
    default:
      break;
  }
};
