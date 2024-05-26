import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { ApiBadRequestResponse, ApiOperation, ApiTags, ApiUnauthorizedResponse } from '@nestjs/swagger';
@ApiTags('User')
@Controller()
export class UserController {
  constructor(private readonly service: UserService) {}
  @ApiOperation({ summary: 'Register a new user' })
  @ApiBadRequestResponse({description: 'Validation Failed'})
  @Post('/register')
  register(@Body() data: CreateUserDto) {
    return this.service.register(data);
  }
}
