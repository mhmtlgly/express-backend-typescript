import { Request, Response } from 'express';

import { Product } from '../../models';

export const products = async (req: Request, res: Response) => {
  const { category, name, description, img, quantity, price } = req.body;
  try {
    const product = await Product.create({
      category,
      name,
      description,
      img,
      quantity,
      price,
    });

    res.status(201).json({ product });
  } catch (error) {
    console.log(JSON.stringify(error.message));
    res.status(400).send(error);
  }
};
