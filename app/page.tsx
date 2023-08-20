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
      <div className='my-48 '>
        <Home />
      </div>
      <div className='my-48 '>
        <About />
      </div>
      <div className='my-48 '>
        <Future />
      </div>
      <div className='my-48 '>
        <Work />
      </div>
      <div className='my-48 '>
        <Table />
      </div>
      <div className='my-48'>
        <Contact />
      </div>
    </main>
  )
}
