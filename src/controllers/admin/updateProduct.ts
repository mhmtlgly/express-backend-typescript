import { Request, Response } from 'express';

import { Product } from '../../models';

export const updateProduct = async (req: Request, res: Response) => {
  await Product.findOneAndUpdate(
    { _id: req.params.id },
    req.body,
    { new: true },
    // { new: true, upsert: true },
    (err, doc) => {
      if (err) {
        console.log(err);
      } else {
        if (req.body.category) {
          // console.log(doc?.$set({ category: [...doc.category, req.body.category] }));
          // console.log(doc?.$set('category', [...doc.category, req.body.category]));
        } else {
          console.log('no category');
        }
        console.log(doc);
        res.json({
          method: 'update',
          params: req.params.id,
          doc,
        });
      }
    },
  );
};
