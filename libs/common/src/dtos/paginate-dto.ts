import { IsOptional } from 'class-validator';

export class PaginateDto {
  @IsOptional()
  page?: number;

  @IsOptional()
  limit?: number;
  
  @IsOptional()
  filter?: string;
}

export interface PaginateResponse<T> {
  data: T[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
  
}
