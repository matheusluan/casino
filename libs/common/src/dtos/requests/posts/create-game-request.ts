import { IsNotEmpty, IsString } from 'class-validator';

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
