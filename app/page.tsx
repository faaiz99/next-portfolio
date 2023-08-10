import '../app/globals.css'
import Home from './components/Home'
import Contact from './components/Contact'
import About from './components/About'
import Work from './components/Work'
import Repos from './Types/Repos'
import { supabase } from './helper/db.helper'
import { RealtimeChannel } from '@supabase/supabase-js'



const getReposFromGH = async()=>{

}

const getReposFromDB = async (): Promise<Repos[]> => {
  let { data: repos, error } = await supabase
  .from('repos')
  .select('*')

  if (error) {  
    throw error;
  }
  return repos 
}

const insertReposToDB = async() : Promise<void> =>{
  console.log('hehe');
}


const repos:RealtimeChannel = supabase.channel('custom-update-channel')
  .on(
    'postgres_changes',
    { event: 'UPDATE', schema: 'public', table: 'repos' },
    (payload) => {
      console.log('Change received!', payload)
    }
  )
  .subscribe()

export default async function Main() {
  const data:Repos[] = await getReposFromDB()
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


'{ created_at: string; description: string; fork: number; github_link: number; id: number; language: string; name: string; open_issues: number; updated_at: string; }[] is not assignable to type Repos[]'
'{ created_at: string; description: string; fork: number; github_link: number; id: number; language: string; name: string; open_issues: number; updated_at: string; }'