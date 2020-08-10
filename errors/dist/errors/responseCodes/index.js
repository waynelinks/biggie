"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.INTERNAL_SERVER_ERROR = exports.TOO_MANY_REQUESTS = exports.UNSUPPORTED_MEDIA_TYPE = exports.NOT_FOUND = exports.FORBIDDEN = exports.PAYMENT_REQUIRED = exports.UNAUTHORIZED = exports.BAD_REQUEST = exports.CREATED = exports.OK = void 0;
// Successful reponses
exports.OK = 200;
exports.CREATED = 201;
// CLient error reponses
exports.BAD_REQUEST = 400;
exports.UNAUTHORIZED = 401;
exports.PAYMENT_REQUIRED = 402;
exports.FORBIDDEN = 403;
exports.NOT_FOUND = 404;
exports.UNSUPPORTED_MEDIA_TYPE = 415;
exports.TOO_MANY_REQUESTS = 429;
// Server error reponses
exports.INTERNAL_SERVER_ERROR = 500;
