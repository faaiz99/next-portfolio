import { NextResponse } from "next/server";
export async function GET() {
  return NextResponse.json(
    { status: true, message: "Health 100%" },
    { status: 200 },
  );
}
