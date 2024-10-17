import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { AuthService } from './auth.service';
import {
  CreateStaffBody,
  LoginStaffBody,
} from '@app/common/dtos/staff-requests';

@Controller('auth')
export class AuthController {
  constructor(private readonly service: AuthService) {}

  @Post('/login')
  async signIn(@Body() body: LoginStaffBody) {
    return await this.service.signIn(body);
  }
  @Post('/register')
  async signUpAndIn(@Body() body: CreateStaffBody) {
    return await this.service.signUpAndSignIn(body);
  }
}
