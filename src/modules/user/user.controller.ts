import { Controller, Get } from '@nestjs/common';
import { Throttle } from '@nestjs/throttler';
import { UserService } from './user.service';

@Controller("user")
export class UserController {
  constructor(private readonly userService: UserService) { }

  @Throttle({ default: { ttl: 30000, limit: 5 } })
  @Get('public')
  getHello(): string {
    return this.userService.getHello();
  }
}
