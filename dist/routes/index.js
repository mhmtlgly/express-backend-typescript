"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.products = exports.home = exports.secured = exports.stripe = exports.contact = exports.authentication = void 0;
var authentication_1 = require("./authentication");
Object.defineProperty(exports, "authentication", { enumerable: true, get: function () { return __importDefault(authentication_1).default; } });
var contact_1 = require("./contact");
Object.defineProperty(exports, "contact", { enumerable: true, get: function () { return __importDefault(contact_1).default; } });
var payment_1 = require("./payment");
Object.defineProperty(exports, "stripe", { enumerable: true, get: function () { return __importDefault(payment_1).default; } });
var securedAPI_1 = require("./securedAPI");
Object.defineProperty(exports, "secured", { enumerable: true, get: function () { return __importDefault(securedAPI_1).default; } });
var home_1 = require("./home");
Object.defineProperty(exports, "home", { enumerable: true, get: function () { return __importDefault(home_1).default; } });
var admin_1 = require("./admin");
Object.defineProperty(exports, "products", { enumerable: true, get: function () { return __importDefault(admin_1).default; } });
//# sourceMappingURL=index.js.map