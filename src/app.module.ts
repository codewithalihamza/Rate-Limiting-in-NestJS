import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { ThrottlerGuard, ThrottlerModule } from '@nestjs/throttler';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    ThrottlerModule.forRoot({
      throttlers: [
        {
          // Global setting
          ttl: 60000, // Time-to-live in milliseconds (1 minute = 60000 ms)
          limit: 10, // Maximum number of requests within the TTL
        },
      ],
    }),
    UserModule,
  ],
  controllers: [],
  providers: [
    {
      provide: APP_GUARD,
      useClass: ThrottlerGuard
    }
  ],
})
export class AppModule { }
