"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DbConnectionError = void 0;
const CustomError_1 = require("./CustomError");
const responseCodes_1 = require("./responseCodes");
class DbConnectionError extends CustomError_1.CustomError {
    constructor(message) {
        super(message);
        this.message = message;
        this.statusCode = responseCodes_1.INTERNAL_SERVER_ERROR;
        this.reason = 'Error connecting to database';
        Object.setPrototypeOf(this, DbConnectionError.prototype);
    }
    serializeErrors() {
        return [
            {
                message: this.message ? this.message : this.reason,
            },
        ];
    }
}
exports.DbConnectionError = DbConnectionError;
