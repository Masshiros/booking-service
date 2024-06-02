import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateSessionTemplateDto } from './dto/create-session-template.dto';
@Controller('session-templates')
export class SessionTemplateController {
  constructor() {}
  @Get(':sessionTemplateId')
  findById() {}

  @Post()
  create(@Body() data: CreateSessionTemplateDto) {
    console.log('data');
  }
}
