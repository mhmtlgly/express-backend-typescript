import { Schema, model, Document, Model } from 'mongoose';

interface UserInterface extends Document {
  email: string;
  password: string;
  role: string;
  // id: string;
}

const UserSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
      lowercase: true,
      unique: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      trim: true,
      // default: buyer,
    },
    // id: {
    //   type: String,
    // },
  },
  { _id: true, timestamps: true, collection: 'users' },
);

export const User = model<UserInterface>('User', UserSchema);
