import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { Database } from "../../Types/Supabase";

const url: string = process.env.NEXT_PUBLIC_SUPABASE_URL ?? "";
const key: string = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? "";
const supabase = createClient<Database>(url, key, {
  auth: { persistSession: false },
});

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const { name, email, message } = data.contact;
    const { error } = await supabase
      .from("messages")
      .insert([{ name, email, message }]);
    if (error) throw error;
    return NextResponse.json(
      { status: true, message: "success", time: new Date().getTime() },
      { status: 201 },
    );
  } catch (error) {
    return error instanceof Error
      ? NextResponse.json(
          {
            status: false,
            error: error.message,
            message: "failure",
            time: new Date().getTime(),
          },
          { status: 500 },
        )
      : NextResponse.json(
          {
            status: false,
            error: "An unknown error occurred",
            message: "failure",
            time: new Date().getTime(),
          },
          { status: 500 },
        );
  }
}
