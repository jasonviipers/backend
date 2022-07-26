export declare const PRISMA_QUERY_INTERPRETATION_ERROR = "P2016";
export declare const PRISMA_RECORD_NOT_FOUND = "RecordNotFound";
export declare function isRecordNotFoundError(error: Error & {
    code?: string;
}): boolean;
export declare function transformStringFieldUpdateInput<T extends undefined | string | {
    set?: string;
}>(input: T, transform: (input: string) => Promise<string>): Promise<T>;
