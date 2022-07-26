declare class UserCreateInput {
    firstName?: string | null;
    lastName?: string | null;
    password: string;
    roles: Array<string>;
    phone: string;
    email: string;
}
export { UserCreateInput };
