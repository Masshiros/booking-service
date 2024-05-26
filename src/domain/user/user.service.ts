import { Injectable } from '@nestjs/common';
@Injectable()
export class UserService {
  register(data: any) {
    console.log(data);
  }
}
