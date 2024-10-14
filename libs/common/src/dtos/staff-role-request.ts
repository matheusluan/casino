import { IsNotEmpty, IsNumber } from 'class-validator';

export class CreateStaffeRoleBody {
  @IsNotEmpty()
  @IsNumber()
  staffId: number;

  @IsNotEmpty()
  @IsNumber()
  roleId: number;
}
