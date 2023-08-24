import './globals.css'
import type { Metadata } from 'next'
import { ThemeProviders } from "./components/theme-providers"
import Header from './components/header'
import Footer from './components/footer'

export const metadata: Metadata = {
  title: 'Nova Blog',
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
    <html lang="ko" suppressHydrationWarning>
      <body className={`selection:bg-orange-400 selection:text-black dark:selection:text-white`}>
        <ThemeProviders>
          <Header />
            {children}
          <Footer />
        </ThemeProviders>
      </body>
    </html>
  )
}
