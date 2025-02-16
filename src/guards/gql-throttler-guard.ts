import { ExecutionContext, Injectable } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { ThrottlerGuard } from '@nestjs/throttler';

@Injectable()
export class GqlThrottlerGuard extends ThrottlerGuard {
    getRequestResponse(context: ExecutionContext) {
        const gqlContext = GqlExecutionContext.create(context); // Get GraphQL context
        const ctx = gqlContext.getContext(); // Extract request and response
        return { req: ctx.req, res: ctx.res };
    }
}