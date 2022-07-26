import { QueryMode } from './QueryMode';
export declare class StringNullableFilter {
    equals?: string | null;
    in?: string[] | null;
    notIn?: string[] | null;
    lt?: string;
    lte?: string;
    gt?: string;
    gte?: string;
    contains?: string;
    startsWith?: string;
    endsWith?: string;
    mode?: QueryMode;
    not?: string;
}
