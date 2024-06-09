import { Body, Controller, Post, Get, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import {
  ApiBadRequestResponse,
  ApiOperation,
  ApiTags,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';
import { AuthGuard } from '../auth/guard/auth.guard';
import { UserReq } from 'src/share/decorator/user.decorator';
import { User } from '@prisma/client';
@ApiTags('User')
@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Get('/users')
  findMany() {
    return this.userService.findMany();
  }
  @ApiOperation({ summary: 'Register a new user' })
  @ApiBadRequestResponse({ description: 'Validation Failed' })
  @Post('/register')
  register(@Body() data: CreateUserDto) {
    return this.userService.register(data);
  }
  @UseGuards(AuthGuard)
  @Get('/users/me')
  getMe(@UserReq() req: User) {
    return req;
  }
}
