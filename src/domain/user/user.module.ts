import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { DatabaseService } from 'src/database/database.service';
//IoC container
@Module({
  imports: [DatabaseService],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
