import { Request, Response } from 'express';

export const verify = async (req: Request, res: Response) => {
  const params = req.params;
  const query = req.query;
  console.log(query);
  console.log(params);
  try {
    // res.status(201).json({ params })
    res.status(201).json({ query });
  } catch (error) {
    console.log(JSON.stringify(error.message));
    res.status(400).send(error);
  }
};
