/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-empty-function */
import { NextRequest, NextResponse } from "next/server"
import { getReposFromGH } from "../../helper/github.helper"
import { getUserFromGH } from "../../helper/github.helper"



export async function GET(req: NextRequest, res: NextResponse) {
  console.log('here')

  try {
    await getReposFromGH()
    await getUserFromGH()
    return NextResponse.json(
      { message: "User/Repos fetched and updated" },
      {
        status: 200,
      }
    );

  } catch (error) {
    return NextResponse.json(
      {
        message: "User/Repos could not be fetched and updated",
        error: error
      },
      {
        status: 200,
      }
    );
  }


}