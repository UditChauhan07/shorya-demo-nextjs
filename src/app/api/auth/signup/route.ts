import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import dbConnect from "@/lib/mongodb";
import User from "@/lib/models/userModel";

export async function POST(req: NextRequest) {
  try {
    await dbConnect();
    const { name, email, phone, password } = await req.json();

    // Check if user exists
    const existing = await User.findOne({ email });
    if (existing) {
      return NextResponse.json(
        { error: "User already exists" },
        { status: 400 }
      );
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await User.create({
      name,
      email,
      phone,
      password: hashedPassword,
    });

    return NextResponse.json(
      { message: "User created Succesfully", user: newUser },
      { status: 201 }
    );
  } catch (err) {
    return NextResponse.json({ error: "Signup failed" }, { status: 500 });
  }
}
