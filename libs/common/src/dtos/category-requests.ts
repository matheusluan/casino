import { IsBoolean, IsNotEmpty, IsOptional, IsString } from 'class-validator';


export class CreateCategoryBody {
  @IsNotEmpty()
  @IsString()
  code: string;

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsOptional()
  @IsBoolean()
  isActive?: boolean;
}

export class CreateCategoryWithGamesBody {
  @IsNotEmpty()
  @IsString()
  code: string;

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsOptional()
  @IsBoolean()
  isActive?: boolean;

  games: number[];
}

export class UpdateCategoryBody {
  @IsString()
  code: string;

  @IsString()
  name: string;
}
