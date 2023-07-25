import dbConnection from "@/utils/db";
import Post from "@/models/Post";
import { NextResponse } from "next/server";

export const GET = async (req) => {
  const url = new URL(req.url);
  const username = url.searchParams.get("username");
  try {
    await dbConnection();
    const posts = await Post.find(username && { username });
    return new NextResponse(JSON.stringify(posts), { status: 200 });
  } catch (error) {
    return new NextResponse("DB Error", { status: 500 });
  }
};
export const POST = async (req) => {
  const body = await req.json();
  const newPost = new Post(body);
  try {
    await dbConnection();
    await newPost.save();
    return new NextResponse("Post has been created", { status: 201 });
  } catch (error) {
    return new NextResponse("DB Error", { status: 500 });
  }
};
