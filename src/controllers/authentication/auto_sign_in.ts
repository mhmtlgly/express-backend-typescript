import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';

import { User } from '../../models';

export const auto_sign_in = async (req: Request, res: Response) => {
  console.log(req.cookies);
  const { token } = req.cookies;
  if (!token) {
    return res.status(400).json({
      status: 'error',
      message: 'Refresh Token is expired. Please sign in again.',
    });
  } else {
    let jwtPayload: any = null;
    try {
      jwtPayload = jwt.verify(token, process.env.JWT_REFRESH_TOKEN!);
    } catch (error) {
      console.log(error);
      return res.status(400).json({
        status: 'error',
        message: "Can't verify Refresh Token",
        error,
      });
    }

    const user = await User.findOne({ _id: jwtPayload.userId }, (error: any, data: any) => {
      if (error) {
        console.log(error);
        return res.status(400).json({
          status: 'error',
          message: "Couldn't find user.",
          error,
        });
      } else {
        console.log(data);
      }
    }).select('-password');

    return res.status(200).json({
      status: 'success',
      message: 'Refresh Token is valid.',
      user,
      isAuthenticated: true,
    });
  }
};
