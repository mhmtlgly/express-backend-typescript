import { Request, Response } from 'express';

export const secured = async (req: Request, res: Response) => {
  console.log(`VARIABLE FROM LOCALS: ${JSON.stringify(res.locals.token)}`);
  console.log(`VARIABLE FROM LOCALS: ${res.locals.accessToken}`);
  console.log('accessed secured route');
  return res
    .status(200)
    .json({ status: 'success', message: 'access granted to protected route' });
};
