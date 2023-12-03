import type { Metadata } from 'next'
import { Noto_Sans_KR, Inter } from 'next/font/google'
import { ThemeProvider } from "@/components/theme-provider"
import { ModeToggle } from "@/components/mode-toggle"
import './globals.css'
import Link from 'next/link'

const notoSansKR = Noto_Sans_KR({ subsets: ['latin'], display: 'swap', variable: '--font-noto-sans' })
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko" className={`${notoSansKR.variable} ${inter.variable}`}>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <header className="flex justify-between py-5 max-w-2xl mx-auto px-4">
            <div className="flex">
              <Link href="/">
                <h1>노바로그</h1>
              </Link>
              <nav className="ml-5">
                <Link href="" className="px-2">소개</Link>
                <Link href="/doc" className="px-2">문서</Link>
              </nav>
            </div>
            <ModeToggle />
          </header>          
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
