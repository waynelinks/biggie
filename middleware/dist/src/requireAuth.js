"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.requireAuth = void 0;
const errors_1 = require("@bigoncloud/errors");
exports.requireAuth = (req, res, next) => {
    if (!req.currentUser)
        throw new errors_1.UnAuthorizedError();
    next();
};
