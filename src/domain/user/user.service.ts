import { Injectable, NotFoundException } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';
import * as bcrypt from 'bcrypt';
@Injectable()
export class UserService {
  constructor(private databaseService: DatabaseService) {}
  findMany() {
    return this.databaseService.user.findMany();
  }
  async register(data: Prisma.UserCreateInput) {
    const userData = {
      email: data.email,
      password: await this.hashPassword(data.password),
      firstName: data.firstName,
      lastName: data.lastName,
      phone: data.phone,
      timezoneCode: data.timezoneCode,
    };
    return this.databaseService.user.create({ data: userData });
  }
  async hashPassword(password: string) {
    const salt = await bcrypt.genSaltSync(10);
    return await bcrypt.hash(password, salt);
  }
  async findOneOrFailByEmail(email: string) {
    const user = await this.databaseService.user.findUnique({
      where: { email },
    });
    if (!user) {
      throw new NotFoundException('User not found');
    }
    return user;
  }
  comparePassword(password: string, hashedPassword: string){
    return bcrypt.compare(password,hashedPassword);
  }
}
