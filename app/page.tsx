/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-empty-function */
import '../app/globals.css'
import Home from './components/Home'
import Contact from './components/Contact'
import About from './components/About'
import Work from './components/Work'
import Repos from './Types/Repos'
import { supabase } from './helper/db.helper'
import { RealtimeChannel } from '@supabase/supabase-js'
import React from 'react'



const getReposFromGH = async()=>{
  
}

const getReposFromDB = async (): Promise<Repos[] > => {
  let { data: repos, error } = await supabase
  .from('repos')
  .select('*')

  if (error) {  
    throw error
  }
  return repos 
}

const insertReposToDB = async() : Promise<void> =>{
  console.log('hehe')

  //https://api.github.com/users/faaiz99/repos
}



export default async function Main() {
  const data: Repos[] = await getReposFromDB()
  console.log(data)
  return (
    <main >
      <Home />
      <About />
      <Work />
      <Contact />
    </main>
  )
}
