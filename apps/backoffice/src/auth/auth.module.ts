/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtModule } from '@nestjs/jwt';
import { StaffModule } from '../staff/staff.module';

@Module({
  imports: [
    StaffModule,
    JwtModule.register({
      global: true,
      secret: '_5yReRbqUT1xn0F0DQKGt5Edb1BC4mNv46Gfp_jzOik',
      signOptions: { expiresIn: '60s' },
    }),
  ],
  providers: [AuthService],
  controllers: [AuthController],
  exports: [AuthService],
})
export class AuthModule {}
