import mongoose, { Schema, model, models } from "mongoose";

const UserSchema = new Schema({
  name: String,
  email: { type: String, unique: true },
  phone: Number,
  password: String,
});

const User = models["users"] || model("users", UserSchema);
export default User;
