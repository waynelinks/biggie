"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.currentUser = void 0;
const jsonwebtoken_1 = require("jsonwebtoken");
exports.currentUser = (req, res, next) => {
    var _a;
    if (!((_a = req.session) === null || _a === void 0 ? void 0 : _a.jwt)) {
        return next();
    }
    try {
        const payload = jsonwebtoken_1.verify(req.session.jwt, 
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        process.env.ACCESS_TOKEN_SECRET);
        req.currentUser = payload;
        // eslint-disable-next-line no-empty
    }
    catch (err) { }
    return next();
};
