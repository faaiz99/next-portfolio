import '../app/globals.css'
import Home from '../app/components/Home'
import Contact from './components/Contact'
import About from './components/About'
import Work from './components/Work'




export const getStaticProps = async () => {
  const token = process.env.GITHUB_TOKEN
  const name = process.env.GITHUB_USER_NAME
  const res = await fetch('https://api.github.com/repos/vercel/next.js', { next: { revalidate: 100 } })
  const repo = await res.json()
  return { props: { repo } }
}

export default function Main({ repo }) {
  return (
    <main >
      <Home />
      <About />
      <Work />
      <Contact />
    </main>
  )
}
