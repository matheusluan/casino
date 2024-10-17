import { Injectable } from '@nestjs/common';
import {
  DeepPartial,
  EntityManager,
  EntityTarget,
  FindManyOptions,
  FindOneOptions,
  FindOptionsWhere,
  InsertResult,
  ObjectLiteral,
  QueryRunner,
  Repository,
  SelectQueryBuilder,
  UpdateResult,
} from 'typeorm';
import { UpsertOptions } from 'typeorm/repository/UpsertOptions.js';

interface IGenericService<T> {
  create(dto: DeepPartial<T>): Promise<T>;
  upsert(
    dto: Partial<T>,
    options: string[] | UpsertOptions<T>,
  ): Promise<InsertResult>;
  update(options: FindOptionsWhere<T>, dto: Partial<T>): Promise<UpdateResult>;
}

@Injectable()
export class GenericService<T extends ObjectLiteral>
  implements IGenericService<T>
{
  constructor(protected readonly repository: Repository<T>) {}

  public async create(dto: DeepPartial<T>): Promise<T> {
    const newModel = this.repository.create(dto);
    return this.repository.save(newModel);
  }

  public async upsert(
    dto: Partial<T>,
    options: string[] | UpsertOptions<T>,
  ): Promise<InsertResult> {
    return this.repository.upsert(dto, options);
  }

  public async update(
    options: FindOptionsWhere<T>,
    dto: Partial<T>,
  ): Promise<UpdateResult> {
    return this.repository.update(options, dto);
  }

  public async decrement(
    options: FindOptionsWhere<T>,
    path: string,
    value: number,
  ): Promise<UpdateResult> {
    return this.repository.decrement(options, path, value);
  }

  public async increment(
    options: FindOptionsWhere<T>,
    path: string,
    value: number,
  ): Promise<UpdateResult> {
    return this.repository.increment(options, path, value);
  }

  public async query(query: string, params?: any[]): Promise<any> {
    return this.repository.query(query, params);
  }

  public createQueryBuilder(
    alias?: string,
    queryRunner?: QueryRunner,
  ): SelectQueryBuilder<T> {
    return this.repository.createQueryBuilder(alias, queryRunner);
  }

  public async findOne(options: FindOneOptions<T>): Promise<T | null> {
    return this.repository.findOne(options);
  }

  public async find(options?: FindManyOptions<T>): Promise<T[]> {
    return this.repository.find(options);
  }

  public async count(options?: FindManyOptions<T>): Promise<{ total: number }> {
    const [, total] = await this.repository.findAndCount(options);
    return { total };
  }

  public async insertMany(dto: Array<Partial<T>>): Promise<InsertResult> {
    return this.repository.insert(dto);
  }

  async runInTransaction<U>(
    work: (manager: EntityManager) => Promise<U>,
  ): Promise<U> {
    return this.repository.manager.transaction(async (transactionManager) => {
      return work(transactionManager);
    });
  }

  public getTarget(): EntityTarget<T> {
    return this.repository.target;
  }
}
