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
exports.secured = void 0;
const secured = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(`VARIABLE FROM LOCALS: ${JSON.stringify(res.locals.token)}`);
    console.log(`VARIABLE FROM LOCALS: ${res.locals.accessToken}`);
    console.log('accessed secured route');
    return res.status(200).json({ status: 'success', message: 'access granted to protected route' });
});
exports.secured = secured;
//# sourceMappingURL=index.js.map