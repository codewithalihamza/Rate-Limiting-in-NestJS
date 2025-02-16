import { Controller, Get } from '@nestjs/common';
import { Throttle } from '@nestjs/throttler';
import { AppService } from './app.service';

@Controller("user")
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Throttle({ default: { ttl: 30000, limit: 5 } }) // Custom rate limit: 5 requests per 30 seconds
  @Get('public')
  getHello(): string {
    return this.appService.getHello();
  }
}
