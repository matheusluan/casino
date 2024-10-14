import { IsNotEmpty, IsString } from 'class-validator';

export class CreateRoleBody {
  @IsNotEmpty()
  @IsString()
  name: string;
}
