import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import dbConnect from "@/lib/mongodb";
import User from "@/lib/models/userModel";
import { signToken } from "@/utils/auth";

export async function POST(req: NextRequest) {
  try {
    await dbConnect();
    const { email, password } = await req.json();

    const user = await User.findOne({ email });
    if (!user) {
      return NextResponse.json(
        { error: "Invalid credentials" },
        { status: 401 }
      );
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return NextResponse.json(
        { error: "Invalid credentials" },
        { status: 401 }
      );
    }

    const token = signToken({ userId: user._id, email: user.email });
    const userDetails = {
      userId: user._id,
      name: user.name,
      email: user.email,
    };

    return NextResponse.json(
      { message: "Login successful", token, userDetails },
      { status: 200 }
    );
  } catch (err) {
    console.error("Login failed:", err); // Log the actual error in the server console
  
    const errorMessage = err instanceof Error ? err.message : String(err);
  
    return NextResponse.json(
      { error: "Login failed", details: errorMessage },
      { status: 500 }
    );
  }
}
