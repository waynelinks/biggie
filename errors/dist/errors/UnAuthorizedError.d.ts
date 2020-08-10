import { CustomError } from './CustomError';
export declare class UnAuthorizedError extends CustomError {
    message: string;
    statusCode: number;
    constructor(message?: string);
    serializeErrors(): {
        message: string;
    }[];
}
