import { createClient } from '@supabase/supabase-js'
import { Database } from '../Types/Supabase'

// Create a single supabase client for interacting with your database
const url: string = process.env.NEXT_PUBLIC_SUPABASE_URL ?? 'undefined'
const key: string = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? 'undefined'
export const supabase = createClient<Database>(url, key, {
  auth: { persistSession: false },
})
