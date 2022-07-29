export interface ITokenService {
  createToken: (email: string, password: string) => Promise<string>;
}
