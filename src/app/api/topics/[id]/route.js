import connectMongo from "@/connect/connectDb";
import Topic from "@/model/topic";
import { NextResponse } from "next/server";

export async function PUT(request, { params }) {
    
  const { id } = params;
  const { newTitle: title, newDescription: description } = await request.json();
  await connectMongo();
  await Topic.findByIdAndUpdate(id, { title, description });
  return NextResponse.json({ message: "Topic updated" }, { status: 200 });
}

export async function GET(request, { params }) {
  const { id } = params;
  await connectMongo();
  const topic = await Topic.findOne({ _id: id });
  return NextResponse.json({ topic }, { status: 200 });
}
