import { NextResponse } from "next/server";
import { getReposFromGH } from "../../helper/github.helper";
import { getUserFromGH } from "../../helper/github.helper";

export async function GET() {
  try {
    const Repo = await getReposFromGH();
    const User = await getUserFromGH();
    if (Repo && User) {
      return NextResponse.json(
        { message: "User/Repos fetched and updated" },
        {
          status: 200,
        },
      );
    }
  } catch (error) {
    return NextResponse.json(
      {
        message: "User/Repos could not be fetched and updated",
        error: error,
      },
      {
        status: 500,
      },
    );
  }
}
