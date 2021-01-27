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
exports.signin = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const models_1 = require("../../models");
const helpers_1 = require("../../helpers");
const signin = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    // let isAuthenticated = false;
    const user = yield models_1.User.findOne({ email: email }, (err, doc) => {
        if (err) {
            console.log(err);
        }
        else {
            console.log(doc);
        }
    });
    if (!user) {
        console.log(`No User found with the E-Mail: ${email}`);
        return res.status(403).json({ status: 'error', message: `No User found with the E-Mail: ${email}` });
    }
    else {
        console.log(`User with E-Mail: ${email} exists.`);
        console.log(user.email);
        const isPasswordCorrect = yield bcrypt_1.default.compare(password, user.password);
        if (!isPasswordCorrect) {
            console.log('Wrong Password');
            return res.status(403).json({ status: 'error', message: 'Wrong Password' });
        }
        else {
            const accessToken = helpers_1.generateAccessToken(user._id);
            const refreshToken = helpers_1.generateRefreshToken(user._id);
            // isAuthenticated = true;
            const accessToken_expiryTime = process.env.JWT_ACCESS_TOKEN_EXPIRY_TIME;
            const { _id, email, role } = user;
            console.log('Password correct');
            console.log({
                _id,
                email,
                role,
                accessToken,
                accessToken_expiryTime,
                refreshToken,
            });
            return res
                .status(200)
                .cookie('token', refreshToken, {
                sameSite: 'strict',
                path: '/api/authentication',
                // secure: true,
                // maxAge: 10000,
                // maxAge: 604800000, // 1000 * 60 * 60 * 24 * 7,
                expires: new Date(Date.now() + 604800000),
                // expires: new Date(Date.now() + process.env.COOKIE_EXPIRY_TIME!),
                httpOnly: true,
            })
                .json({ _id, email, role, accessToken, accessToken_expiryTime, isAuthenticated: true });
        }
    }
});
exports.signin = signin;
//# sourceMappingURL=signin.js.map