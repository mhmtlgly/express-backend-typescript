import { Request, Response } from 'express';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2020-08-27',
});

export const stripePayment = async (req: Request, res: Response) => {
  const { amount, email } = req.body;
  console.log(email);
  const paymentIntent = await stripe.paymentIntents.create({
    amount: amount * 100,
    currency: 'eur',
    receipt_email: email,
    payment_method_types: ['card', 'sepa_debit'],
  });
  console.log(paymentIntent);
  res.json({ Client_Secret: paymentIntent.client_secret });
};
