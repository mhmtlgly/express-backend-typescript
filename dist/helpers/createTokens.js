"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateRefreshToken = exports.generateAccessToken = void 0;
const jsonwebtoken_1 = require("jsonwebtoken");
const generateAccessToken = (userId, tokenVersion) => {
    return jsonwebtoken_1.sign({ userId, tokenVersion }, process.env.JWT_ACCESS_TOKEN, {
        expiresIn: process.env.JWT_ACCESS_TOKEN_EXPIRY_TIME,
    });
};
exports.generateAccessToken = generateAccessToken;
const generateRefreshToken = (userId, tokenVersion) => {
    return jsonwebtoken_1.sign({ userId, tokenVersion }, process.env.JWT_REFRESH_TOKEN, {
        expiresIn: process.env.JWT_REFRESH_TOKEN_EXPIRY_TIME,
    });
};
exports.generateRefreshToken = generateRefreshToken;
//# sourceMappingURL=createTokens.js.map