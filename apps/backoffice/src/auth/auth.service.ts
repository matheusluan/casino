import {
  BadRequestException,
  ConflictException,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { StaffService } from '../staff/staff.service';
import { JwtService } from '@nestjs/jwt';
import {
  CreateStaffBody,
  LoginStaffBody,
} from '@app/common/dtos/staff-requests';
import { Staff } from '@app/common/entities/Staff';
import { compare } from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private staffService: StaffService,
    private jwtService: JwtService,
  ) {}

  async signIn({
    email,
    password,
  }: LoginStaffBody): Promise<
    Omit<Staff, 'hashPassword'> & { access_token: string }
  > {
    const staff = await this.staffService.findOne({
      where: {
        email,
      },
    });

    if (!staff) throw new NotFoundException('User are not registered.');

    if (!(await compare(password, staff.password)))
      throw new UnauthorizedException('Wrong credentials');

    const payload = { sub: staff.id, email: staff.email };

    return {
      ...staff,
      access_token: await this.jwtService.signAsync(payload),
    };
  }

  async signUpAndSignIn({
    name,
    email,
    password,
    confirmPassword,
  }: CreateStaffBody): Promise<
    Omit<Staff, 'hashPassword'> & { access_token: string }
  > {
    const staffExists = await this.staffService.findOne({ where: { email } });

    if (staffExists)
      throw new ConflictException(
        'Staff already exist with the informed email.',
      );

    if (password !== confirmPassword)
      throw new BadRequestException(`Password's don't match.`);

    const staff = await this.staffService.create({ name, email, password });
    const payload = { sub: staff.id, email: staff.email };
    const access_token = await this.jwtService.signAsync(payload);

    return {
      ...staff,
      access_token,
    };
  }
}
