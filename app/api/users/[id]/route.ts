import connectMongoDB from "@/libs/mongodb";
import User from "@/models/user";
import { NextResponse } from "next/server";

export async function PUT(request: any, { params }: any) {
  const { id } = params;
  const {
    newName: name,
    newMail: mail,
    newStatus: status,
    newRole: role,
  } = await request.json();
  await connectMongoDB();
  await User.findByIdAndUpdate(id, { name, mail, status, role });
  return NextResponse.json({ message: "User updated" }, { status: 200 });
}

export async function GET(request: any, { params }: any) {
  const { id } = params;
  await connectMongoDB();
  const user = await User.findOne({ _id: id });
  return NextResponse.json({ user }, { status: 200 });
}
