"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
<<<<<<< HEAD
exports.default = (app, url, data, statusCode) => (supertest_1.default(app)
    .post(`${process.env.BASE_API}/${url}`)
    .send(data)
    .expect(statusCode));
=======
exports.default = (app, url, data, statusCode) => {
    return supertest_1.default(app)
        .post(url)
        .send(data)
        .expect(statusCode);
};
>>>>>>> request
