import { JwtService } from '@nestjs/jwt';
import { ITokenService } from '../ITokenService';
export declare class TokenServiceBase implements ITokenService {
    protected readonly jwtService: JwtService;
    constructor(jwtService: JwtService);
    createToken(username: string, password: string): Promise<string>;
}
