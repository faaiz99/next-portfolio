import { createClient } from '@supabase/supabase-js'

// Create a single supabase client for interacting with your database
const url:string = process.env.NEXT_PUBLIC_SUPABASE_URL
const key:string = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
export const supabase = createClient(url,key)