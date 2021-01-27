"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateToken = exports.morgan = exports.cors = void 0;
var cors_1 = require("./cors");
Object.defineProperty(exports, "cors", { enumerable: true, get: function () { return __importDefault(cors_1).default; } });
var morgan_1 = require("./morgan");
Object.defineProperty(exports, "morgan", { enumerable: true, get: function () { return __importDefault(morgan_1).default; } });
var authentication_1 = require("./authentication");
Object.defineProperty(exports, "validateToken", { enumerable: true, get: function () { return authentication_1.validateToken; } });
//# sourceMappingURL=index.js.map