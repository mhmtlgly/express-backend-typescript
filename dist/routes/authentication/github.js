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
const express_1 = require("express");
const axios_1 = __importDefault(require("axios"));
const router = express_1.Router();
router.post('/api/github', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { code } = req.body;
    let token;
    try {
        const githubFirstReq = yield axios_1.default({
            method: 'POST',
            url: 'https://github.com/login/oauth/access_token',
            data: {
                client_id: process.env.GITHUB_CLIENT_ID,
                client_secret: process.env.GITHUB_CLIENT_SECRET,
                code,
            },
            headers: {
                Accept: 'application/json',
            },
        })
            .then((response) => {
            token = response.data.access_token;
            console.log(response);
            res.header('content-type', 'application/json').json({ token });
        })
            .catch((err) => console.log(err));
        const githubSecondRequest = () => __awaiter(void 0, void 0, void 0, function* () {
            const URL = 'https://api.github.com/mhmtlgly';
            const AuthStr = `Bearer ${token}`;
            const response = yield axios_1.default
                .get(URL, { headers: { Authorization: AuthStr } })
                .then((response) => {
                // If request is good...
                console.log(response.data);
            })
                .catch((error) => {
                console.log('error 3 ' + error);
            });
        });
    }
    catch (error) {
        console.log('github error');
        res.send('nix da');
    }
}));
exports.default = router;
//# sourceMappingURL=github.js.map