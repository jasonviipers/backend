import { ExecutionContext } from '@nestjs/common';
import type { Request } from 'express';
import { DefaultAuthGuard } from './defaultAuth.guard';
export declare class GqlDefaultAuthGuard extends DefaultAuthGuard {
    getRequest(context: ExecutionContext): Request;
}
