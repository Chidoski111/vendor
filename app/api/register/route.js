import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import User from "@/models/user";
import { connectMongoDB } from "@/lib/mongodb";

export async function POST(req) {
  try {
    const {name, email,password} = await req.json();
  
    await connectMongoDB();
    await User

    return NextResponse.json({message: "User registered", })

  } catch (error) {
    return NextResponse.json({
      message: "An Error occured while registering user"
    },{status: 500})
  }
}
 