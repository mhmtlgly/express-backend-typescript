import { Request, Response } from 'express';
import bcrypt from 'bcrypt';

import { User } from '../../models';
import { sendMail } from '../../helpers';

export const signup = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({
      email,
      password: hashedPassword,
      role: 'buyer',
      // id: Types.ObjectId(),
    });

    const text = 'The Text version';

    const html = `
    <h2>Welcome to AMAZNG APP</h2>
    <p>Your email is: ${email}</p>
    <a href="http://localhost:8002/account/verify?token=123">verify account</a>
    `;

    const mail = sendMail(req, res, text, html);
    res.status(201).json({ user });
  } catch (error) {
    console.log(JSON.stringify(error.message));
    res.status(400).send(error);
  }
};
