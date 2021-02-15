import { Request, Response } from 'express';

import { Product } from '../../models';

export const getProduct = async (req: Request, res: Response) => {
  const product = await Product.findById({
    _id: req.params.id,
  });
  res.json({
    method: 'get',
    params: req.params.id,
    product,
  });
};
