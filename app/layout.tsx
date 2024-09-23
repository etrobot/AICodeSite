import type { Metadata } from "next";
// import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from '@/components/providers';
import Navbar from '@/components/navbar';
// Remove this import
// import Head from 'next/head';

// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: process.env.TITLE ?? "AICodeSite",
  description: process.env.DESC ?? "Codes a website with AI",
};

// Add this function to handle Google Analytics script
function generateGoogleAnalyticsScript() {
  if (!process.env.GA_ID) return null;
  
  return {
    __html: `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${process.env.GA_ID}');
    `
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      {process.env.GA_ID && (
        <>
          <script async src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GA_ID}`} />
          <script dangerouslySetInnerHTML={generateGoogleAnalyticsScript() || { __html: '' }} />
        </>
      )}
      <body>
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