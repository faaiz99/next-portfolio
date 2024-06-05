import { NextResponse } from "next/server";
import { processGHData } from "../../helper/github.helper";
export async function GET() {
  try {
    const result = await processGHData();
    if (result) { // Add more specific checks if necessary
      return NextResponse.json( 
        { message: "User & Repos fetched and updated", operation: result},
        {
          status: 200,
        },
      );
    }
  } catch (error: any) {
    return NextResponse.json(
      {
        message: "User & Repos could not be fetched and updated",
        operation: false,
        error: error.message,
      },
      {
        status: 500,
      },
    );
  }
}
