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
import '@/styles/custom.css'

import { cookies } from "next/headers";
import { getLocale, getMessages } from "next-intl/server";
import NextTopLoader from "nextjs-toploader";
import { NextIntlClientProvider } from "next-intl";
import { Toaster } from "react-hot-toast";


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


type Props = {
  params: Promise<{ id: string }>
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

export const metadata: Metadata = {
  title: "Web App Developer",
  description: "I am a Web App Developer with over 3 years of experience, specializing in frontend development using React, Vue.js, and Next.js to create user-friendly and high-performance interfaces. With a strong design sense and backend knowledge in Node.js and MongoDB, I ensure seamless interaction between frontend and backend. My goal is to deliver innovative, scalable, and efficient web applications that meet user needs.",
  keywords: ['Web App Developer', 'JavaScript', 'React', 'Next.js', 'Front-End Development', 'Full-Stack Development', 'HealthTech', 'Biodiversity', 'Software Development', 'UI/UX Design', 'Web Applications', 'API Development', 'FE'],
  verification: {
    google: "zUSnbL8nttNPqeEAuv0ewCY5-G4fjM7saufqMHkbaA4",
  },
  openGraph: {
    images: '/images/profile/nguyenloc_developer.png',
  },
};





export default async function RootLayout({
  children,

}: Readonly<{
  children: React.ReactNode;

}>) {



  const cookieStore = cookies();
  const theme = cookieStore.get('theme')

  const messages = await getMessages();



  return (
    <html data-theme={theme?.value === 'true'}>
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
        <Toaster
          position="top-center"
          reverseOrder={false}
        />
        <NextIntlClientProvider messages={messages}>
          <MainLayout theme={theme?.value === 'true'}>
            {children}
          </MainLayout>
        </NextIntlClientProvider>


      </body>
    </html>
  );
}
