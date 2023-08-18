/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextRequest, NextResponse } from "next/server"
import { supabase } from '../../helper/db.helper'

export async function POST(req: NextRequest, res: NextResponse) {

    const message = await req.json()
    const { data, error } = await supabase
        .from('messages')
        .insert([
            { name: message.name, email: message.email, message: message.message },
        ])
    return NextResponse.json(
        {
            message: data,
            error: error
        },
        {
            status: 200
        }
    );
}