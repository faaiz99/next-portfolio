import { NextResponse } from "next/server";
export async function GET() {
  return NextResponse.json(
    { status: true, message: "Health 100%", time: new Date().getTime() },
    { status: 200 },
  );
}
