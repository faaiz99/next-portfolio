import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { Database } from "../../Types/Supabase";
import { Repo } from "../../Types/Repos";

const url: string = process.env.NEXT_PUBLIC_SUPABASE_URL ?? "";
const key: string = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? "";
const supabase = createClient<Database>(url, key, {
	auth: { persistSession: false },
});

export async function POST(req: Request) {
	try {
		const totalRepos = async (): Promise<number> => {
			const { count, error } = await supabase
				.from("repos")
				.select("id", { count: "exact" });
			if (error) {
				return 0;
			}
			return count || 0;
		};
		const repos = async (init: number, range: number = 0): Promise<Repo[]> => {
			const { data, error } = await supabase
				.from("repos")
				.select("*")
				.range(init, range - 1);
			if (error) console.log("error while fetching repos:", error);
			return data as Repo[];
		};
		const { start = 0, range = 5 } = await req.json();

		return NextResponse.json({
			status:true,
			message: "success", 
			data:{
				repos: await repos(start, range),
				totalRepos: await totalRepos()
			},
			time: new Date().getTime()
		}, { status: 200 });
	} catch (error) {
		return error instanceof Error
			? NextResponse.json({status:false, error: error.message, message:"failure", time: new Date().getTime()  }, { status: 500 })
			: NextResponse.json(
				{ status:false, error: "An unknown error occurred", message:"failure", time: new Date().getTime() },
				{ status: 500 },
			);
	}
}