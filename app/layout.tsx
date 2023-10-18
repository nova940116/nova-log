import './globals.css'
import type { Metadata } from 'next'
import Header from './components/header'
import Footer from './components/footer'
import { Nanum_Gothic } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'

const NanumGothic = Nanum_Gothic({
  subsets: ['latin'],
  display: 'swap',
  weight: ["400", "700", "800"]
})

export const metadata: Metadata = {
  title: '노바로그',
  description: '노바의 개발블로그',
  openGraph: {
    title: 'Nova Blog',
    description: '노바의 개발블로그',
    url: 'https://nova-log.vercel.app',
    siteName: 'Nova ',
    images: [
      {
        url: 'https://nova-log.vercel.app/thumbnail.png',
        width: 800,
        height: 600,
      },
    ],
    locale: 'ko_KR',
    type: 'website',
  },  
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko" className={`${NanumGothic.className} scroll-smooth`}>
      <body className={`selection:bg-orange-400 selection:text-white bg-[#FFFAF6]`}>
        <Header />
        {children}
        <Analytics />
        <Footer />
      </body>
    </html>
  )
}
