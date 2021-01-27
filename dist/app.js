"use strict";
//
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
require("./helpers/connectDatabase");
const express_1 = __importDefault(require("express"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const middleware_1 = require("./middleware");
const routes_1 = require("./routes");
const github_1 = __importDefault(require("./routes/authentication/github"));
const app = express_1.default();
//- Middleware -//
app.use([express_1.default.json(), middleware_1.cors, middleware_1.morgan, cookie_parser_1.default()]);
//- Routes -//
app.use('/api/authentication', routes_1.authentication);
app.use('/api/contact', routes_1.contact);
app.use('/api/payment', routes_1.stripe);
app.use('/api/secured', routes_1.secured);
app.use('/', routes_1.home);
app.use(github_1.default);
//- Server -//
const PORT = process.env.PORT || 5050;
app.listen(PORT, () => console.log(`app listening on port: ${PORT}...`));
//# sourceMappingURL=app.js.map