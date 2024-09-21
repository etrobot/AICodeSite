import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from '@/components/providers';
import Navbar from '@/components/navbar';
import Head from 'next/head';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: process.env.TITLE ?? "AICodeSite",
  description: process.env.DESC ?? "Codes a website with AI",
};


export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      {process.env.GA_ID && <Head>
        <script async src={`https://www.googletagmanager.com/gtag/js?${process.env.GA_ID}`}></script>
        <script dangerouslySetInnerHTML={{ __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', ${process.env.GA_ID});
        `}} />
      </Head>}
      <body className={inter.className}>
        <Providers
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >   
          <Navbar />
            {children}
        </Providers>
      </body>
    </html>
  );
}