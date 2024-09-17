import connectMongoDB from "../../../../lib/mongodb";
import { NextResponse } from "next/server";
import Topic from "../../../../app/models/topic";

/**
 * Handles a PUT request to update a single topic.
 *
 * This function expects the request body to contain two properties:
 *   - `newTitle`: The new title for the topic.
 *   - `newDescription`: The new description for the topic.
 *
 * The function will update the topic with the given ID with the
 * provided title and description.
 *
 * @param {import("next/server").NextRequest} request
 *   The request object.
 * @param {{ params: { id: string } }} context
 *   The context object with the topic ID as a parameter.
 * @returns {Promise<import("next/server").NextResponse>}
 *   A JSON response with a success message and a 200 status code.
 */
export async function PUT(request, { params }) {
  // Get the topic ID from the request parameters.
  try {
    const { id } = params;

  // Parse the request body as JSON and extract the new title and
  // description.
  // the new input values will be saved in the title and description variables
  // { newTitle: title, newDescription: description } this aint same as the object with dynamic valyes,it just renaming the newTitle and newDescription into title and description from the editTopicForm component (object destructuring)

  const { newTitle: title, newDescription: description } =
    await request.json();

  // Connect to the MongoDB database.
  await connectMongoDB();

  // Update the topic with the given ID with the new title and
  // description.
  await Topic.findByIdAndUpdate(id, { title, description });

  // Return a JSON response with a success message and a 200 status
  // code.
  return NextResponse.json({ message: "Topic updated" }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "Error updating topic (PUT)" }, { status: 500 });
  }
  
}

// GET request to fetch a single topic by ID.
export async function GET(request,{ params }) {
  try {
    const { id } = params;
    await connectMongoDB();
    const topic = await Topic.findOne({_id:id});
    return NextResponse.json({topic}, { status: 200 });
    
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "Error fetching topic (GET)" }, { status: 500 });
  }
}