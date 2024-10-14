import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateGameBody {
  @IsNotEmpty()
  @IsString()
  code: string;

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
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
