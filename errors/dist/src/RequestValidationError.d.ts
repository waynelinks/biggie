import { ValidationError } from 'express-validator';
import { CustomError } from './CustomError';
export declare class RequestValidationError extends CustomError {
    errors: ValidationError[];
    statusCode: number;
    constructor(errors: ValidationError[]);
    serializeErrors(): {
        message: any;
        field: string;
    }[];
}
