import { Module } from '@nestjs/common';
import { SessionTemplateController } from './session-template.service';

@Module({
  controllers: [SessionTemplateController],
})
export class SessionTemplateModule {}
