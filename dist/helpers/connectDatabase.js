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
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectToDatabase = void 0;
const mongoose_1 = require("mongoose");
const connectToDatabase = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield mongoose_1.connect(process.env.MONGODB_URI, {
            // dbName: "mahos_db",
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
        }, () => console.log('Database is connected.'));
    }
    catch (error) {
        console.log('could not connect to Database!');
        console.log(error);
    }
});
exports.connectToDatabase = connectToDatabase;
exports.connectToDatabase();
exports.default = exports.connectToDatabase;
//# sourceMappingURL=connectDatabase.js.map