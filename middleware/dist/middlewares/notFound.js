"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.notFound = void 0;
const errors_1 = require("@bigoncloud/errors");
exports.notFound = (app) => {
    app.all('*', async (req, res) => {
        throw new errors_1.NotFoundError(`Can't find ${req.originalUrl} on this server!`);
    });
};
