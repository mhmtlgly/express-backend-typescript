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
exports.auto_sign_in = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const models_1 = require("../../models");
const auto_sign_in = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(req.cookies);
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
        }).select('-password');
        const { email, role } = user;
        return res.status(200).json({
            email,
            role,
            isAuthenticated: true,
        });
    }
});
exports.auto_sign_in = auto_sign_in;
//# sourceMappingURL=auto_sign_in.js.map