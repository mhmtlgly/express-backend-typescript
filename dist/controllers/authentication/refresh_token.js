"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.refresh_access_token = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const models_1 = require("../../models");
const refresh_access_token = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { token } = req.cookies;
    if (!token) {
        return res.status(400).json({
            status: 'error',
            message: 'Refresh Token is expired. Please sign in again.',
        });
    }
    else {
        let jwtPayload = null;
        try {
            jwtPayload = jsonwebtoken_1.default.verify(token, process.env.JWT_REFRESH_TOKEN);
        }
        catch (error) {
            console.log(error);
            return res.status(400).json({
                status: 'error',
                message: "Can't verify Refresh Token",
                error,
            });
        }
        const user = yield models_1.User.findOne({ _id: jwtPayload.userId }, (error, data) => {
            if (error) {
                console.log(error);
                return res.status(400).json({
                    status: 'error',
                    message: "Couldn't find user.",
                    error,
                });
            }
            else {
                console.log(data);
            }
        });
        const accessToken = jsonwebtoken_1.default.sign({ userId: user._id }, process.env.JWT_ACCESS_TOKEN, {
            expiresIn: process.env.JWT_ACCESS_TOKEN_EXPIRY_TIME,
        });
        res
            //   .cookie('token', accessToken, {
            //     sameSite: 'strict',
            //     path: '/api/authentication/refresh_token',
            //     // secure: true,
            //     // maxAge: 10000,
            //     maxAge: 604800000, // 1000 * 60 * 60 * 24 * 7,
            //     httpOnly: true,
            //   })
            .status(200)
            .json({
            status: 'success',
            message: 'Refresh Token is valid.',
            accessToken,
        });
    }
});
exports.refresh_access_token = refresh_access_token;
//# sourceMappingURL=refresh_token.js.map