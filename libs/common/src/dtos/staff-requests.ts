import { IsNotEmpty, IsString } from 'class-validator';
import { Role } from '../entities/Role';

export class CreateStaffBody {
  @IsNotEmpty()
  @IsString()
  email: string;

  @IsNotEmpty()
  @IsString()
  password: string;

  @IsString()
  @IsNotEmpty()
  firstName: string;

  @IsString()
  @IsNotEmpty()
  lastName: string;

  @IsNotEmpty()
  roles: Role[];
}
