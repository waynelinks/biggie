"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
exports.default = (app, url, data, statusCode) => {
    return supertest_1.default(app)
        .post(url)
        .send(data)
        .expect(statusCode);
};
