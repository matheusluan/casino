import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateGameBody {
  @IsNotEmpty()
  @IsString()
  code: string;

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsOptional()
  @IsString()
  thumbnail: string;
}

export class UpdateGameBody {
  @IsString()
  code: string;

  @IsString()
  name: string;

  @IsString()
  thumbnail: string;
}
