import { createClient } from "@supabase/supabase-js";
import { Database } from "../Types/Supabase";
const url: string = process.env.NEXT_PUBLIC_SUPABASE_URL ?? "";
const key: string = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? "";
export const supabase = createClient<Database>(url, key, {
	auth: { persistSession: false },
});