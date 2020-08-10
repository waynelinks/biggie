"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnAuthorizedError = void 0;
const CustomError_1 = require("./CustomError");
const responseCodes_1 = require("./responseCodes");
class UnAuthorizedError extends CustomError_1.CustomError {
    constructor(message = 'Not Authorized!') {
        super(message);
        this.message = message;
        this.statusCode = responseCodes_1.UNAUTHORIZED;
        Object.setPrototypeOf(this, UnAuthorizedError.prototype);
    }
    serializeErrors() {
        return [
            {
                message: this.message,
            },
        ];
    }
}
exports.UnAuthorizedError = UnAuthorizedError;
