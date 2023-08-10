import '../app/globals.css'
import Home from '../app/components/Home'
import Contact from './components/Contact'
import About from './components/About'
import Work from './components/Work'


import { createClient } from '@supabase/supabase-js'

// Create a single supabase client for interacting with your database
const url = process.env.NEXT_PUBLIC_SUPABASE_URL
const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
const supabase = createClient(url,key)

async function getRepos() {
  let { data: repos, error } = await supabase
    .from('repos')
    .select('*')


  if (!repos) 
    return "No Repositories found"


  return repos
}


export default async function Main() {
  const data = await getRepos()
  console.log(data);
  return (
    <main >
      <Home />
      <About />
      <Work />
      <Contact />
    </main>
  )
}
