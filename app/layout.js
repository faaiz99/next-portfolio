
import { Inter } from 'next/font/google'
import Navbar from './components/navbar/Navbar'
import Footer from './Footer'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Faaiz Portfolio',
  description: 'Created by Faaiz Aslam',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className='bg-zinc-950 text-zinc-200 flex justify-center' suppressHydrationWarning={true}>
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />

      </body>
    </html>
  )
}
