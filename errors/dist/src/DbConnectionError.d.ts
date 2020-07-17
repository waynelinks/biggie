import { CustomError } from './CustomError';
export declare class DbConnectionError extends CustomError {
    statusCode: number;
    reason: string;
    constructor();
    serializeErrors(): {
        message: string;
    }[];
}
