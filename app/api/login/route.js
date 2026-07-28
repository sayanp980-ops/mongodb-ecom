import { NextResponse } from "next/server";
import connectDB from "@/lib/db";
import User from "@/models/User";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export async function POST(request) {
  try {
    await connectDB();

    const { email, password } = await request.json();
    const user = await User.findOne({ email });

    if (!user) {
      return Response.json(
        {
          success: false,
          message: "User not found",
        },
        { status: 404 }
      );
    }

    const isPasswordMatch = await bcrypt.compare(
      password,
      user.password
    );
    console.log("Entered Password:", password);
    console.log("Stored Hash:", user.password);
    console.log("Match:", isPasswordMatch);
    if (!isPasswordMatch) {
      return Response.json(
        {
          success: false,
          message: "Invalid Password",
        },
        { status: 401 }
      );
    }
    const token = jwt.sign(
      { userId: user._id },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    const response = NextResponse.json({
      success: true,
      message: "Login Successful",
    });

    response.cookies.set("token", token, {
      httpOnly: true,
      secure: false,
      maxAge: 60 * 60 * 24 * 7,
      path: "/",
    });

    return response;

  } catch (error) {
    console.error(error);
    return Response.json(
      {
        success: false,
        message: "Login Failed",
      },
      { status: 500 }
    );
  }
}