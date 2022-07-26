import * as common from '@nestjs/common';
export declare class ForbiddenException extends common.ForbiddenException {
    statusCode: number;
    message: string;
}
export declare class NotFoundException extends common.NotFoundException {
    statusCode: number;
    message: string;
}
