import { Request, Response } from 'express';

import { Product } from '../../models';

export const deleteProduct = async (req: Request, res: Response) => {
  const product = await Product.findByIdAndDelete({ _id: req.params.id }).catch((err: any) => console.log(err));

  res.json({
    method: 'delete',
    params: req.params.id,
    product,
  });
};
