import { type PrismaClient } from '@prisma/client/extension';

export default abstract class GenericService<T> {
  constructor(protected modelClient: PrismaClient) {}

  async getAll(): Promise<Array<T>> {
    return this.modelClient.findMany();
  }

  async getById(id: string): Promise<Array<T>> {
    return this.modelClient.findUnique({
      where: {
        id,
      },
    });
  }
}
