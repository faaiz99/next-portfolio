import '../app/globals.css'
import Home from '../app/components/Home'
import Contact from './components/Contact'
import About from './components/About'
import Work from './components/Work'


import { createClient } from '@supabase/supabase-js'

// Create a single supabase client for interacting with your database
const supabase = createClient(process.env.URL, process.env.API_KEY)


async function getRepos() {
  let { data: repos, error } = await supabase
    .from('repos')
    .select('*')


  if (!repos) 
    return "No Repositories found"


  return repos
}










export default function Main({ repos }) {
console.log(repos);
  return (
    <main >
      <Home />
      <About />
      <Work />
      <Contact />
    </main>
  )
}
