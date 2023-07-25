import { NextResponse } from "next/server";
import User from "@/models/User";
import dbConnection from "@/utils/db";
import bcrypt from "bcryptjs";

export const POST = async (req) => {
  const { email, password, name } = await req.json();
  const hashedPwd = await bcrypt.hash(password, 10);
  const newUser = new User({
    email,
    name,
    password: hashedPwd,
  });
  await dbConnection();
  try {
    await newUser.save();
    return new NextResponse("User Created Successfully", { status: 201 });
  } catch (e) {
    return new NextResponse(e.message, { status: 500 });
  }
};
