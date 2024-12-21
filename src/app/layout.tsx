import type { Metadata } from "next";


import localFont from "next/font/local";

import MainLayout from "@/components/layouts/MainLayout";


// ---------import css--------------

import "@/styles/bootstrap.min.css"
import "@/styles/magnific-popup.css"
import "@/styles/magnific-popup.css"
import "@/styles/slick.css"
import "@/styles/style.css"
import "@/styles/responsive.css"

import "@/styles/fontawsome/css/all.min.css"
import "@/styles/fontawsome/css/fontawesome.min.css"
import '@/styles/work-experience.css'
import { cookies } from "next/headers";
import { getLocale } from "next-intl/server";
import NextTopLoader from "nextjs-toploader";


// -----------------------------------------------------


const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Portfolio | Web App Developer",
  description: "Web App Developer with over 3 years of experience in building and developing web applications.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  const cookieStore = cookies();
  const theme = cookieStore.get('theme')


  return (
    <html lang="en" data-theme={theme?.value === 'true'}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased ${theme?.value === 'true' && 'dark-theme'}`}
      >
        <NextTopLoader
          color="#1d99ac"
          initialPosition={0.1}
          crawlSpeed={300}
          height={4}
          crawl={true}
          showSpinner={false}
          easing="ease"
          speed={400}
          shadow="0 0 10px #00b8d4,0 0 5px #00b8d4"
        />
        <MainLayout theme={theme?.value === 'true'}>
          {children}
        </MainLayout>

      </body>
    </html>
  );
}
