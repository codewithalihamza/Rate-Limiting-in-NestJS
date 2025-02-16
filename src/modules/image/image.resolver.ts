import { UseGuards } from '@nestjs/common';
import { Query, Resolver } from '@nestjs/graphql';
import { GqlThrottlerGuard } from 'src/guards/gql-throttler-guard';

@Resolver()
export class ImageResolver {

  @Query(() => String)
  @UseGuards(GqlThrottlerGuard) // Apply rate limiting to this query
  testRateLimit(): string {
    return "Rate limit test successful!";
  }
}
