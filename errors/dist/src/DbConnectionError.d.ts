import { CustomError } from './CustomError';
export declare class DbConnectionError extends CustomError {
    message: string;
    statusCode: number;
    reason: string;
    constructor(message: string);
    serializeErrors(): {
        message: string;
    }[];
}
