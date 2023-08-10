import { createClient } from '@supabase/supabase-js'
import { Database } from '../Types/supabase'

// Create a single supabase client for interacting with your database
const url:string = process.env.NEXT_PUBLIC_SUPABASE_URL
const key:string = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
export const supabase = createClient<Database>(url,key)