import '../app/globals.css'
import Home from './components/Home'
import Contact from './components/Contact'
import About from './components/About'
import Work from './components/work/Work'
import { Future } from './components/Future'
import React from 'react'
import Table from './components/work/Table'

export default async function Page() {
  return (
    <main >
      <div className='my-48 h-screen'>
        <Home />
      </div>
      <div className='my-48 h-screen'>
        <About />
      </div>
      <div className='my-48 h-screen'>
        <Future />
      </div>
      <div className='my-48 h-screen'>
        <Work />
      </div>
      <div className='my-48 h-screen'>
        <Table />
      </div>
      <div className='my-48 h-screen'>
        <Contact />
      </div>
    </main>
  )
}
