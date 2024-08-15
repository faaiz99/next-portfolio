import { NextResponse, NextRequest } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { Database } from "../../Types/Supabase";

const url: string = process.env.NEXT_PUBLIC_SUPABASE_URL ?? "";
const key: string = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? "";
const supabase = createClient<Database>(url, key, {
  auth: { persistSession: false },
});

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    const { name, email, message } = data.contact;
    const { error } = await supabase
      .from("messages")
      .insert([{ name, email, message }]);
    if (error) throw error;
    const url = req.url
      .replace("/api/contact", "")
      .replace(/\/$/, "")
      .replace(/\/$/, "");
    return NextResponse.redirect(url, 308);
  } catch (error) {
    return error instanceof Error
      ? NextResponse.json({ error: error.message }, { status: 500 })
      : NextResponse.json(
          { error: "An unknown error occurred" },
          { status: 500 },
        );
  }
}
