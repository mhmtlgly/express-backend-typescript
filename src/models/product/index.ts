import { Schema, model, Document, Model, CallbackError } from 'mongoose';

interface ProductInterface extends Document {
  // _id: String;
  name: string;
  price: string;
  description: string;
  quantity: number;
  // category: [string];
  category: string[];
  img: String;
}

const ProductSchema: Schema = new Schema(
  {
    // _id: String,
    name: {
      type: String,
      required: true,
      unique: true,
    },
    price: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
    },
    quantity: {
      type: Number,
      required: true,
    },
    category: [
      {
        type: String,
        required: true,
      },
    ],
    img: {
      type: String,
    },
  },
  // { _id: true, timestamps: true, collection: 'products' },
  { _id: true, timestamps: true },
);

export const Product = model<ProductInterface>('products', ProductSchema);
//
