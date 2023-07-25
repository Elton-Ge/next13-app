import dbConnection from "@/utils/db";
import Post from "@/models/Post";
import { NextResponse } from "next/server";

export const GET = async (req) => {
  try {
    await dbConnection();
    const posts = await Post.find();
    return new NextResponse(JSON.stringify(posts), { status: 200 });
  } catch (error) {
    return new NextResponse("DB Error", { status: 500 });
  }
};
