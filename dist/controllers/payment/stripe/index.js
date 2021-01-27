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
exports.stripePayment = void 0;
const stripe_1 = __importDefault(require("stripe"));
const stripe = new stripe_1.default(process.env.STRIPE_SECRET_KEY, {
    apiVersion: '2020-08-27',
});
const stripePayment = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { amount, email } = req.body;
    console.log(email);
    const paymentIntent = yield stripe.paymentIntents.create({
        amount: amount * 100,
        currency: 'eur',
        receipt_email: email,
        payment_method_types: ['card', 'sepa_debit'],
    });
    console.log(paymentIntent);
    res.json({ Client_Secret: paymentIntent.client_secret });
});
exports.stripePayment = stripePayment;
//# sourceMappingURL=index.js.map