import jwt from 'jsonwebtoken';

export const generateAccessToken = (userId: any) => {
  return jwt.sign({ userId }, process.env.JWT_ACCESS_TOKEN!, {
    expiresIn: process.env.JWT_ACCESS_TOKEN_EXPIRY_TIME,
  });
};

export const generateRefreshToken = (userId: any) => {
  return jwt.sign({ userId }, process.env.JWT_REFRESH_TOKEN!, {
    expiresIn: process.env.JWT_REFRESH_TOKEN_EXPIRY_TIME,
  });
};
