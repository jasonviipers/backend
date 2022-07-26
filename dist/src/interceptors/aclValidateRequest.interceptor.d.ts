import { CallHandler, ExecutionContext, NestInterceptor } from '@nestjs/common';
import { Observable } from 'rxjs';
import { RolesBuilder } from 'nest-access-control';
import { Reflector } from '@nestjs/core';
export declare class AclValidateRequestInterceptor implements NestInterceptor {
    private readonly rolesBuilder;
    private readonly reflector;
    constructor(rolesBuilder: RolesBuilder, reflector: Reflector);
    intercept(context: ExecutionContext, next: CallHandler): Observable<any>;
}
