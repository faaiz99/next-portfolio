import { NextResponse } from "next/server";

export async function GET() {
  try {
    const result = await fetch(
      "https://wsklmprgrpyhohnmwxcl.supabase.co/functions/v1/sync-repos",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      },
    );
    if (!result) {
      return NextResponse.json(
        { message: "No data was fetched and updated", operation: false },
        {
          status: 204,
        },
      );
    }
    return NextResponse.json(
      { message: "User & Repos fetched and updated", operation: result },
      {
        status: 200,
      },
    );
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
