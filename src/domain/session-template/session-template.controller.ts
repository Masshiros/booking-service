import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateSessionTemplateDto } from './dto/create-session-template.dto';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { SessionTemplateResponseDto } from './dto/session-template-response.dto';

@Controller('session-templates')
export class SessionTemplateController {
  constructor() {}
  @Get(':sessionTemplateId')
  findById() {}

  @ApiOperation({ summary: 'Create new session template' })
  @ApiResponse({
    type: SessionTemplateResponseDto,
    description: 'Session Template Created',
  })
  @Post()
  create(@Body() data: CreateSessionTemplateDto) {
    console.log('data');
  }
}
