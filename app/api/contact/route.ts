/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextRequest, NextResponse } from "next/server"
import { supabase } from '../../helper/db.helper'

// export async function middleware(request: NextRequest) {
//     const response = NextResponse.next()
  
//     if (request.nextUrl.pathname.startsWith("/api")) {
//       response.headers.append("Access-Control-Allow-Origin", "*")
//     }
//     //...
//     return response
//   }

export async function POST(req: NextRequest, res: NextResponse) {

    const message = await req.json()
    req.headers.append("Access-Control-Allow-Origin", "*")
    const { nextUrl: { origin } } = req
    console.log(origin);
    const { data, error } = await supabase
        .from('messages')
        .insert([
            { name: message.name, email: message.email, message: message.message },
        ])
    // return NextResponse.json(
    //     {
    //         message: data,
    //         error: error
    //     },
    //     {
    //         status: 200
    //     }
    // );
    return NextResponse.redirect(`${origin}`, { status: 302 });
}