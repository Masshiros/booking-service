import { Module } from '@nestjs/common';
import { SessionTemplateController } from './session-template.controller';

@Module({
  controllers: [SessionTemplateController],
})
export class SessionTemplateModule {}
