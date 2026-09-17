import type { Metadata } from "next";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/Footer";
import Top from "./components/Top";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

const title = "Faaiz Portfolio";
const description = "Created by Faaiz Aslam";

export const metadata: Metadata = {
  metadataBase: new URL("https://faaiz-portfolio-prod.vercel.app"),
  title,
  description,
  openGraph: {
    title,
    description,
    url: "/",
    siteName: "Faaiz Aslam",
    images: ["/assets/faaiz.jpeg"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/assets/faaiz.jpeg"],
  },
};

type RootLayoutProps = {
  children: React.ReactNode;
};

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <html
      lang="en"
      suppressHydrationWarning={false}
      className={`${inter.className} bg-zinc-100 dark:bg-zinc-950 text-zinc-800 dark:text-zinc-200 scroll-smooth`}
    >
      <body>
        <Navbar />
        {children}
        <Footer />
        <Top />
      </body>
    </html>
  );
};

export default RootLayout;
