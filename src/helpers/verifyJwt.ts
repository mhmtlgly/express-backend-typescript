import jwt from 'jsonwebtoken';

export const verifyJwt = (token: any) => {
  try {
    return jwt.verify(token, process.env.JWT_REFRESH_TOKEN!);
  } catch (error) {
    console.log(error);
    return false;
  }
};
