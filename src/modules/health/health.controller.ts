import { Controller, Get } from '@nestjs/common';
import { SkipThrottle } from '@nestjs/throttler';

// @SkipThrottle() // Skip rate limiting for all routes in this controller
@Controller('health')
export class HealthController {
  // Global configuration of rate limiting working for this route
  @Get()
  checkHealth() {
    return 'Service is healthy.';
  }
  @Get('public')
  @SkipThrottle() // Skip rate limiting for this route
  getPublicData() {
    return 'This is public data.';
  }
}