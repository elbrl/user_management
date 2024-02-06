import connectMongoDB from "@/libs/mongodb";
import User from "@/models/user";
import { NextResponse } from "next/server";

export async function POST(request: any) {
  const { name, mail, status, role } = await request.json();
  await connectMongoDB();
  await User.create({ name, mail, status, role });
  return NextResponse.json({ message: "User Created" }, { status: 201 });
}

export async function GET() {
  await connectMongoDB();
  const users = await User.find();
  return NextResponse.json({ users });
}

export async function DELETE(request: any) {
  const id = request.nextUrl.searchParams.get("id");
  await connectMongoDB();
  await User.findByIdAndDelete(id);
  return NextResponse.json({ message: "User deleted" }, { status: 200 });
}
