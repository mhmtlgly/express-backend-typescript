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
exports.signup = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const models_1 = require("../../models");
const helpers_1 = require("../../helpers");
const signup = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    try {
        const hashedPassword = yield bcrypt_1.default.hash(password, 10);
        const user = yield models_1.User.create({
            email,
            password: hashedPassword,
            role: 'buyer',
        });
        const text = 'The Text version';
        const html = `
    <h2>Welcome to AMAZNG APP</h2>
    <p>Your email is: ${email}</p>
    <a href="http://localhost:8002/account/verify?token=123">verify account</a>
    `;
        const mail = helpers_1.sendMail(req, res, text, html);
        res.status(201).json({ user });
    }
    catch (error) {
        console.log(JSON.stringify(error.message));
        res.status(400).send(error);
    }
});
exports.signup = signup;
//# sourceMappingURL=signup.js.map