"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.commonMiddleware = void 0;
const cors_1 = __importDefault(require("cors"));
const helmet_1 = __importDefault(require("helmet"));
const compression_1 = __importDefault(require("compression"));
const morgan_1 = __importDefault(require("morgan"));
const cookie_session_1 = __importDefault(require("cookie-session"));
exports.commonMiddleware = (app, express) => {
    app.set('trust proxy', true);
    app.use(express.json({ limit: '10kb' }));
    app.use(express.urlencoded({ extended: true }));
    app.use(cors_1.default());
    app.use(helmet_1.default());
    app.use(compression_1.default());
    if (process.env.NODE_ENV === 'development') {
        app.use(morgan_1.default('dev'));
    }
    app.use(cookie_session_1.default({
        signed: false,
        secure: process.env.NODE_ENV !== 'tests',
    }));
};
