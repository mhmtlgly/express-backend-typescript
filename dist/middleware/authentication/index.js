"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const validateToken = (req, res, next) => {
    var _a;
    let accessToken = (_a = req.headers.authorization) === null || _a === void 0 ? void 0 : _a.split(' ').pop();
    if (!accessToken) {
        return res.status(400).json({
            status: 'error',
            message: 'No Access Token found in Authorization Header.',
        });
    }
    else {
        jsonwebtoken_1.default.verify(accessToken, process.env.JWT_ACCESS_TOKEN, (error, token) => {
            if (error) {
                console.log(error);
                return res.status(400).json({
                    status: 'error',
                    message: "Can't verify Refresh Token",
                    error,
                });
            }
            else {
                console.log(token);
                res.locals.token = token;
                res.locals.accessToken = accessToken;
                next();
            }
        });
    }
};
exports.validateToken = validateToken;
//# sourceMappingURL=index.js.map