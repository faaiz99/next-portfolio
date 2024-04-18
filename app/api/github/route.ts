import { NextResponse } from "next/server";
import { getReposFromGH } from "../../helper/github.helper";
import { getUserFromGH } from "../../helper/github.helper";
export async function GET() {
  try {
    const [repos, user] = await Promise.all([getReposFromGH(), getUserFromGH()]);

    if (repos && user) { // Add more specific checks if necessary
      return NextResponse.json(
        { message: "User/Repos fetched and updated" },
        {
          status: 200,
        },
      );
    } else {
      throw new Error("Repos or User data is not valid");
    }
  } catch (error: any) {
    return NextResponse.json(
      {
        message: "User/Repos could not be fetched and updated",
        error: error.message,
      },
      {
        status: 500,
      },
    );
  }
}
