import { StringFilter } from 'src/utils/StringFilter';
import { StringNullableFilter } from 'src/utils/StringNullableFilter';
declare class UserWhereInput {
    firstName?: StringNullableFilter;
    id?: StringFilter;
    lastName?: StringNullableFilter;
    phone?: StringFilter;
}
export { UserWhereInput };
