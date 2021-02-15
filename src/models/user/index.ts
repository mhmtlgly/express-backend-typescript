import { Schema, model, Document, Model } from 'mongoose';

interface UserInterface extends Document {
  // _id: String;
  email: string;
  password: string;
  role: string;
  tokenVersion: number;
  verifiedEmail: boolean;
}

const UserSchema = new Schema(
  {
    // _id: String,
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
    },
    tokenVersion: {
      type: Number,
      default: 0,
    },
    verifiedEmail: {
      type: Boolean,
      default: false,
    },
  },
  { _id: true, timestamps: true },
);

export const User = model<UserInterface>('users', UserSchema);
