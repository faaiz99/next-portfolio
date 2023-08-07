import '../app/globals.css'
import Home from '../app/components/Home'
import Contact from './components/Contact'
import About from './components/About'
import Work from './components/Work'


export default function Main() {
  return (
    <main>
      <Home/>
      <Work/>
      <About/>
      <Contact/>
    </main>
  )
}
