import { Observable } from 'rxjs';
import { ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { JwtAuthGuard } from './jwt/jwtAuth.guard';
export declare class DefaultAuthGuard extends JwtAuthGuard {
    private readonly reflector;
    constructor(reflector: Reflector);
    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<any>;
}
