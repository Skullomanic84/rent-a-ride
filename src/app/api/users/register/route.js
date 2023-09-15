import { connectDB } from "@/config/dbConfig";
import { NextResponse } from "next/server";
import User from "@/models/userModel";
import bcrypt from 'bcryptjs';

connectDB();

export async function POST(request) {
  try {
    const reqBody = await request.json();

    // check if user already exists
    const userExits = await User.findOne({email: reqBody.email });
    if (userExits) {
      throw new Error("User already exists");
    }

    // password hashing
    const salt = await bcrypt.genSalt(10);
    const passwordHash = await bcrypt.hash(reqBody.password, salt);
    reqBody.password = passwordHash;

    // create user
    await User.create(reqBody);

    return NextResponse.json({
      message: "user created successfully",
      },
      {status: 201}
      );
  } catch (error) {
    return NextResponse.json({ message: error.message}, {status: 400});
  }
}