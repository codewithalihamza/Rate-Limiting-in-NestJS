import { Injectable } from '@nestjs/common';
import { ThrottlerGuard } from '@nestjs/throttler';

@Injectable()
export class CustomThrottlerGuard extends ThrottlerGuard {
    protected async getTracker(req: Record<string, any>): Promise<string> {
        // Extract IP from the 'X-Forwarded-For' header or fallback to req.ip
        return req.headers['x-forwarded-for'] || req.ip;
    }
}
