import type { Metadata } from "next";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/Footer";
import Top from "./components/Top";
import { Inter } from "next/font/google";
import { siteConfig } from "./lib/site";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  alternates: { canonical: "/" },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    url: "/",
    siteName: siteConfig.name,
    locale: "en_US",
    type: "profile",
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    creator: siteConfig.twitterHandle,
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: siteConfig.name,
  jobTitle: siteConfig.jobTitle,
  url: siteConfig.url,
  image: `${siteConfig.url}${siteConfig.image}`,
  sameAs: siteConfig.sameAs,
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "COMSATS University Islamabad",
  },
  knowsAbout: [
    "Full Stack Development",
    "Next.js",
    "React",
    "Node.js",
    "NestJS",
    ".NET Core",
    "TypeScript",
    "Azure",
  ],
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <Navbar />
        {children}
        <Footer />
        <Top />
      </body>
    </html>
  );
};

export default RootLayout;
