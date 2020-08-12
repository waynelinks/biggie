"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.currentUser = void 0;
const jsonwebtoken_1 = require("jsonwebtoken");
exports.currentUser = (contract) => (req, res, next) => {
    var _a;
    UserPayload.shape = contract;
    if (!((_a = req.session) === null || _a === void 0 ? void 0 : _a.jwt))
        return next();
    try {
        const payload = jsonwebtoken_1.verify(req.session.jwt, process.env.JWT_SECRET);
        req.currentUser = payload;
    }
    catch (err) { }
    return next();
};
