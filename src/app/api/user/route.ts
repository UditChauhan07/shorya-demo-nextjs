import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import mongoose, { Schema, model, models } from "mongoose";

// 1. Define User Schema
const UserSchema = new Schema({
  name: String,
  email: String,
  phone: Number,
  dob: String,
  password: String,
});

// 2. Define Model (avoid re-registering)
const User = models.User || model("Users", UserSchema);

// 3. API Route (POST)
export async function POST(req: NextRequest) {
  try {
    await dbConnect();
    const body = await req.json();
    const user = await User.create(body);
    return NextResponse.json(user, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: "Error creating user" }, { status: 500 });
  }
}
