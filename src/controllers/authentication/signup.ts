import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import { User } from '../../models';
// import mongoose, { Types } from 'mongoose';

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

    console.log(`User created ${user}`);
    res.status(201).json({ user });
  } catch (error) {
    // console.log(JSON.stringify(error));
    console.log(JSON.stringify(error.message));
    res.status(400).send(error);
  }
};
