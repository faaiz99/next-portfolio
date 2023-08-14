/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-empty-function */
import '../app/globals.css'
import Home from './components/Home'
import Contact from './components/Contact'
import About from './components/About'
import Work from './components/Work'
import { Future } from './components/Future'
import React from 'react'

export default async function Page() {
  return (
    <main >
      <div className='my-48'>
        <Home />
      </div>
      <div className='my-48'>
        <About />
      </div>
      <div className='my-48'>
        <Future />
      </div>
      <div className='my-48'>
        <Work />
      </div>
      <div className='my-48'>
        <Contact />
      </div>
    </main>
  )
}
