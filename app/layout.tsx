import Link from "next/link"
import "./globals.css"
import { Noto_Sans_KR } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { Analytics } from "@/components/analytics"
import { ModeToggle } from "@/components/mode-toggle"
import Logo from "@/icons/logo"

const NotoSansKR = Noto_Sans_KR({ subsets: ["latin"] })

export const metadata = {
  title: '노바로그',
  description: '취향을 잔뜩 담은 나의 공간',
  metadataBase: new URL('https://nova-log.vercel.app'),
  alternates: {
    canonical: '/'
  },  
  openGraph: {
    images: 'https://nova-log.vercel.app/thumbnail.png',
  },  
}
interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="ko">
      <body
        className={`antialiased min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-50 ${NotoSansKR.className}`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div>
            <header className="py-4 px-3">
              <div className="flex items-center">
                <nav className="space-x-6 mr-4">
                  <Link className="flex items-center" href="/">
                    <Logo className="w-[24px] h-[24px]" />
                  </Link>
                  {/* <Link href="/about">About</Link> */}
                </nav>
                <ModeToggle />
              </div>
            </header>
            <main className="grid grid-cols-1 sm:grid-cols-[1fr_minmax(48rem,_1fr)_1fr] lg:grid-cols-[1fr_minmax(48rem,_1fr)_1fr]">
              <section></section>
              <section className="flex justify-center">{children}</section>
              <section></section>
            </main>
          </div>
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}
