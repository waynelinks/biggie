"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RequestValidationError = void 0;
const CustomError_1 = require("./CustomError");
const responseCodes_1 = require("./responseCodes");
class RequestValidationError extends CustomError_1.CustomError {
    constructor(errors) {
        super('Invalid Credentials!');
        this.errors = errors;
        this.statusCode = responseCodes_1.BAD_REQUEST;
        Object.setPrototypeOf(this, RequestValidationError.prototype);
    }
    serializeErrors() {
        return this.errors.map((err) => ({ message: err.msg, field: err.param }));
    }
}
exports.RequestValidationError = RequestValidationError;
