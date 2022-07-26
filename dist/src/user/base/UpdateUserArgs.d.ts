import { UpdateUserInput } from '../dto/update-user.input';
import { UserWhereUniqueInput } from './UserWhereUniqueInput';
declare class UpdateUserArgs {
    where: UserWhereUniqueInput;
    data: UpdateUserInput;
}
export { UpdateUserArgs };
