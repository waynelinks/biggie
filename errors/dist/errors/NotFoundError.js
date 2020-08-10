"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotFoundError = void 0;
const CustomError_1 = require("./CustomError");
const responseCodes_1 = require("./responseCodes");
class NotFoundError extends CustomError_1.CustomError {
    constructor(message) {
        super(message);
        this.message = message;
        this.statusCode = responseCodes_1.NOT_FOUND;
        Object.setPrototypeOf(this, NotFoundError.prototype);
    }
    serializeErrors() {
        return [
            {
                message: this.message,
            },
        ];
    }
}
exports.NotFoundError = NotFoundError;
