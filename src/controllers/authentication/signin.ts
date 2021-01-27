import { Request, Response } from 'express';
import bcrypt from 'bcrypt';

import { User } from '../../models';
import { generateRefreshToken, generateAccessToken } from '../../helpers';

export const signin = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  // let isAuthenticated = false;

  const user = await User.findOne({ email: email }, (err: any, doc: any) => {
    if (err) {
      console.log(err);
    } else {
      console.log(doc);
    }
  });

  if (!user) {
    console.log(`No User found with the E-Mail: ${email}`);
    return res.status(403).json({ status: 'error', message: `No User found with the E-Mail: ${email}` });
  } else {
    console.log(`User with E-Mail: ${email} exists.`);
    console.log(user.email);

    const isPasswordCorrect = await bcrypt.compare(password, user.password);

    if (!isPasswordCorrect) {
      console.log('Wrong Password');
      return res.status(403).json({ status: 'error', message: 'Wrong Password' });
    } else {
      const accessToken = generateAccessToken(user._id);
      const refreshToken = generateRefreshToken(user._id);
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
        // isAuthenticated,
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
};
