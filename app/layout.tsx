
import { Inter } from 'next/font/google'
import Navbar from './components/navbar/Navbar'
import Footer from './Footer'
const inter = Inter({ subsets: ['latin'] })

interface Metadata {
  title:string,
  description:string
}

export const metadata:Metadata = {
  title: 'Faaiz Portfolio',
  description: 'Created by Faaiz Aslam',
}
type RootLayoutProps = {
  children: React.ReactNode;
};


const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <html lang="en" className='bg-zinc-950 text-zinc-200' suppressHydrationWarning={true} >
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
