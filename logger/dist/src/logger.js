"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logger = void 0;
const winston_1 = require("winston");
const env = process.env.NODE_ENV || 'development';
const logger = winston_1.createLogger({
    level: env === 'development' ? 'debug' : 'info',
    format: winston_1.format.combine(winston_1.format.timestamp({
        format: 'YYYY-MM-DD HH:mm:ss',
    }), winston_1.format.json(), winston_1.format.errors({ stack: true }), winston_1.format.splat()),
    defaultMeta: { service: process.env.SERVICE },
    transports: [
        new winston_1.transports.File({
            filename: 'error.log',
            level: 'error',
        }),
        new winston_1.transports.File({ filename: 'combined.log' }),
    ],
    exceptionHandlers: [
        new winston_1.transports.File({ filename: 'uncaughtExceptions.log' }),
    ],
});
exports.logger = logger;
if (process.env.NODE_ENV !== 'production') {
    logger.add(new winston_1.transports.Console({
        level: 'info',
        format: winston_1.format.combine(winston_1.format.colorize(), winston_1.format.printf((info) => `${info.timestamp} ${info.level}: ${info.message}`)),
    }));
}
