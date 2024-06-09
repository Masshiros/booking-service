import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from '../user/user.service';
import bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}
  async signIn(email: string, password: string) {
    // email
    const user = await this.userService.findOneOrFailByEmail(email);
    // compare password
    const isMatched = await this.userService.comparePassword(
      password,
      user.password,
    );
    if (!isMatched) {
      throw new UnauthorizedException('Password not match');
    }
    const payload = { sub: user.id, email: user.email };
    const accessToken = await this.jwtService.signAsync(payload);
    return { accessToken, payload };
  }
}
