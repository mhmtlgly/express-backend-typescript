"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
exports.default = cors_1.default({
    exposedHeaders: ['Access-Control-Allow-Origin', 'Vary', 'Content-Length', 'Authorization'],
    credentials: true,
    origin: [
        `${process.env.FRONTEND_URL}`,
        'http://localhost:3000',
        'http://localhost:8002',
        'http://localhost:8003',
    ],
});
//# sourceMappingURL=index.js.map