import dbConnection from "@/utils/db";
import { NextResponse } from "next/server";
import Post from "@/models/Post";

export const GET = async (req, { params }) => {
  const { id } = params;
  try {
    await dbConnection();
    const post = await Post.findById(id);

    return new NextResponse(JSON.stringify(post), { status: 200 });
  } catch (error) {
    return new NextResponse("DB Error", { status: 500 });
  }
};
