import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';
@Injectable()
export class UserService {
  constructor(private databaseService: DatabaseService) {}
  findMany() {
    return this.databaseService.user.findMany();
  }
  register(data: Prisma.UserCreateInput) {
    return this.databaseService.user.create({ data });
  }
}
