import Navbar from "./components/navbar/Navbar";
import Footer from "./components/Footer";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

interface Metadata {
  title: string;
  description: string;
}

export const metadata: Metadata = {
  title: "Faaiz Portfolio",
  description: "Created by Faaiz Aslam",
};
type RootLayoutProps = {
  children: React.ReactNode;
};

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <html
      lang="en"
      suppressHydrationWarning={false}
      className={`${inter.className} bg-zinc-100  dark:bg-zinc-950 text-zinc-200 scroll-smooth`}
    >
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
