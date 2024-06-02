import { Body, Controller, Post, Get } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import {
  ApiBadRequestResponse,
  ApiOperation,
  ApiTags,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';
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
}
