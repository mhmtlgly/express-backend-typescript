import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

export const validateToken = (req: Request, res: Response, next: NextFunction) => {
  let accessToken = req.headers.authorization?.split(' ').pop();

  if (!accessToken) {
    return res.status(400).json({
      status: 'error',
      message: 'No Access Token found in Authorization Header.',
    });
  } else {
    jwt.verify(accessToken, process.env.JWT_ACCESS_TOKEN!, (error, token) => {
      if (error) {
        console.log(error);
        return res.status(400).json({
          status: 'error',
          message: "Can't verify Refresh Token",
          error,
        });
      } else {
        console.log(token);
        res.locals.token = token;
        res.locals.accessToken = accessToken;
        next();
      }
    });
  }
};
