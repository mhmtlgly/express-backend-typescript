import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';

import { generateAccessToken } from '../../helpers';
import { User } from '../../models';

export const refresh_access_token = async (req: Request, res: Response) => {
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

    const user = await User.findOneAndUpdate(
      { _id: jwtPayload.userId },
      { $inc: { tokenVersion: 1 } },
    ).catch((err: any) => console.log(err));

    if (user.tokenVersion !== jwtPayload.tokenVersion) {
      return res.status(400).json({
        status: 'error',
        message: 'Token Version not correct.',
      });
    }

    if (user) {
      return res.status(200).json({
        status: 'success',
        message: 'Refresh Token is valid.',
        accessToken: generateAccessToken(user._id, user.tokenVersion),
        accesTokenVersion: user.tokenVersion,
      });
    } else {
      return res.status(400).json({
        status: 'error',
        message: 'User not found.',
      });
    }
  }
};
