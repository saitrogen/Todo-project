import connectMongoDB from "@lib/mongodb";
import { NextResponse } from "next/server";
import Topic from "@app/models/topic";

/**
 * Handles a POST request to create a new topic.
 *
 * @param {import("next/server").NextRequest} request
 *   The request object.
 * @returns {Promise<import("next/server").NextResponse>}
 *   The response object.
 */
export async function POST(request) {
  try {
    const { title, description } = await request.json();
    await connectMongoDB();
    const topic = await Topic.create({ title, description });
    return NextResponse.json(
      { message: "Topic created", topic },
      { status: 201 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Error creating topic", error },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    await connectMongoDB();
    const topics = await Topic.find();
    return NextResponse.json(topics);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Error fetching topics" },
      { status: 500 }
    );
  }
}

export async function DELETE(request) {
  
  const id =  request.nextUrl.searchParams.get("id");

  try {
    await connectMongoDB();

    const topics = await Topic.findByIdAndDelete(id);
    return NextResponse.json(topics);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Error deleting topics" },
      { status: 500 }
    );
  }
}

