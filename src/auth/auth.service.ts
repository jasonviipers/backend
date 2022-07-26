import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PrismaService } from 'nestjs-prisma';
import { UserService } from 'src/user/user.service';
import { Credentials } from './Credentials/Credentials';
import { CredentialsRegister } from './Credentials/CredentialsRegister';
import { PasswordService } from './password.service';
import { TokenService } from './token.service';
import { UserInfo } from './UserInfo';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly passwordService: PasswordService,
    private readonly tokenService: TokenService,
    protected readonly prisma: PrismaService,
  ) {}

  async validateUser(
    email: string,
    password: string,
  ): Promise<UserInfo | null> {
    const user = await this.userService.findOne({
      where: { email },
    });
    if (user && (await this.passwordService.compare(password, user.password))) {
      const { roles } = user;
      return { email, roles };
    }
    return null;
  }

  async login(credentials: Credentials): Promise<UserInfo> {
    // Extract the email and password from the body of the request
    const { email, password } = credentials;
    // Here we attempt to find a user with the given email
    const user = await this.validateUser(
      credentials.email,
      credentials.password,
    );
    // If no user was found throw an error
    if (!user) {
      throw new UnauthorizedException('The passed credentials are incorrect');
    }
    // Create an access token for the user
    const accessToken = await this.tokenService.createToken(email, password);
    return {
      accessToken,
      ...user,
    };
  }

  async signup(credentials: CredentialsRegister): Promise<UserInfo> {
    // Extract the user data from the body of the request
    const { email, password, firstName, lastName, phone } = credentials;
    // Here we attempt to create a new user
    const user = await this.userService.create({
      data: {
        email,
        password: await this.passwordService.hash(password),
        firstName,
        lastName,
        phone,
        roles: ['user'], // Here we assign every new user the `[user]` role
      },
    });
    // If creating a new user fails throw an error
    if (!user) {
      throw new UnauthorizedException('Could not create user');
    }
    // Create an access token for the newly created user
    const accessToken = await this.tokenService.createToken(email, password);
    // Return the access token as well as the some details about the user
    return {
      accessToken,
      ...user,
    };
  }
}
