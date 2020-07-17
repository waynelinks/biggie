import { CustomError } from './CustomError';
export declare class UnAuthorizedError extends CustomError {
    statusCode: number;
    reason: string;
    constructor();
    serializeErrors(): {
        message: string;
    }[];
}
