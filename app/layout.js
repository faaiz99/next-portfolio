
import { Inter } from 'next/font/google'
import Navbar from './Navbar'
import Footer from './Footer'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Faaiz Portfolio',
  description: 'Created by Faaiz Aslam',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className='dark'>
      <body className={inter.className}>
        <Navbar />
        {children}</body>
      <Footer />
    </html>
  )
}
