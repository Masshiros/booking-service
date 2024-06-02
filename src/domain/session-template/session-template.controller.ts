import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { CreateSessionTemplateDto } from './dto/create-session-template.dto';
import {
  ApiBadRequestResponse,
  ApiForbiddenResponse,
  ApiInternalServerErrorResponse,
  ApiResponse,
  ApiUnauthorizedResponse,
  ApiUnprocessableEntityResponse,
} from '@nestjs/swagger';
import { SessionTemplateResponseDto } from './dto/session-template-response.dto';
import { ApiOperatorDecorator } from 'src/share/decorator/api-operation.decorator';
import { UpdateSessionTemplateDto } from './dto/update-session-template.dto';

@Controller('session-templates')
export class SessionTemplateController {
  constructor() {}
  @ApiOperatorDecorator({
    type: CreateSessionTemplateDto,
    summary: 'Get a session template',
    description: 'Get a session template',
  })
  @Get(':sessionTemplateId')
  findById() {}

  @ApiOperatorDecorator({
    type: CreateSessionTemplateDto,
    summary: 'Create a new session template',
    description: 'Create a new session template',
  })
  @Post()
  create(@Body() data: CreateSessionTemplateDto) {
    console.log('data');
  }
  @ApiOperatorDecorator({
    type: CreateSessionTemplateDto,
    summary: 'Update session template',
    description: 'Update session template',
  })
  @Patch(':sessionTemplateId')
  updateById(
    @Param('sessionTemplateId') sessionTemplateId: number,
    @Body() data: UpdateSessionTemplateDto,
  ) {
    console.log(sessionTemplateId);
  }
}
