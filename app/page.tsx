import '../app/globals.css'
import Home from './components/Home'
import Contact from './components/Contact'
import About from './components/About'
import Work from './components/Work'
import { supabase } from './helper/db.helper'




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
