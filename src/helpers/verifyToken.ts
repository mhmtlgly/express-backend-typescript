import jwt from 'jsonwebtoken';

export const verifyToken = (token: any) => {
  try {
    return jwt.verify(token, process.env.JWT_REFRESH_TOKEN!);
  } catch (error) {
    console.log(error);
    return false;
  }
};
