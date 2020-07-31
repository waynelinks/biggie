"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const winston_1 = require("winston");
const winston_daily_rotate_file_1 = __importDefault(require("winston-daily-rotate-file"));
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const env = process.env.NODE_ENV || 'development';
let dir = './logs';
if (!dir)
    dir = path_1.default.resolve('logs');
if (!fs_1.default.existsSync(dir))
    fs_1.default.mkdirSync(dir);
const options = {
    file: {
        level: env === 'development' ? 'debug' : 'warn',
        filename: dir + '/%DATE%.log',
        datePattern: 'YYYY-MM-DD',
        zippedArchive: true,
        timestamp: true,
        handleExceptions: true,
        humanReadableUnhandledException: true,
        prettyPrint: true,
        json: true,
        maxSize: '20m',
        colorize: true,
        maxFiles: '14d',
    },
};
exports.default = winston_1.createLogger({
    transports: [
        new winston_1.transports.Console({
            level: env === 'development' ? 'debug' : 'warn',
            format: winston_1.format.combine(winston_1.format.errors({ stack: true }), winston_1.format.prettyPrint()),
        }),
    ],
    exceptionHandlers: [new winston_daily_rotate_file_1.default(options.file)],
    exitOnError: false,
});
