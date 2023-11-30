import type { Metadata } from 'next'
import { Noto_Sans_KR } from 'next/font/google'
import { ThemeProvider } from "@/app/components/theme-provider"
import { ModeToggle } from "@/app/components/mode-toggle"
import './globals.css'
import Link from 'next/link'

const notoSansKR = Noto_Sans_KR({ subsets: ['latin'] })

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
    <html lang="ko">
      <body className={notoSansKR.className}>
        {/* <ThemeProvider attribute="class" defaultTheme="system" enableSystem> */}
          <div className="max-w-2xl mx-auto py-10 px-4">
            <header className="flex justify-between py-5">
              <div className="flex">
                <Link href="/">
                  <h1>노바로그</h1>
                </Link>
                <nav className="ml-5">
                  <Link href="" className="px-2">소개</Link>
                  <Link href="" className="px-2">문서</Link>
                </nav>
              </div>
              {/* <ModeToggle /> */}
            </header>
            {children}
          </div>
        {/* </ThemeProvider> */}
      </body>
    </html>
  )
}
