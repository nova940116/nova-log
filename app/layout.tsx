import { Inter as FontSans } from "next/font/google"
import localFont from "next/font/local"

import "@/styles/globals.css"
import { cn } from "@/lib/utils"
import { Toaster } from "@/components/ui/toaster"
import { Analytics } from "@/components/analytics"
import { ThemeProvider } from "@/components/theme-provider"
import { docsConfig } from "@/config/docs"
import { siteConfig } from "@/config/site"
import { Icons } from "@/components/icons"
import { MainNav } from "@/components/main-nav"
import { ModeToggle } from "@/components/mode-toggle"
import { DocsSidebarNav } from "@/components/sidebar-nav"
import { SiteFooter } from "@/components/site-footer"
import Link from "next/link"

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

// Font files can be colocated inside of `pages`
const fontHeading = localFont({
  src: "../assets/fonts/CalSans-SemiBold.woff2",
  variable: "--font-heading",
})

interface RootLayoutProps {
  children: React.ReactNode
}

export const metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: ["개발 블로그", "개발 문서"],
  authors: [
    {
      name: "nova",
      url: "https://github.com/nova940116",
    },
  ],
  creator: "nova",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  manifest: `${siteConfig.url}/site.webmanifest`,
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
          fontHeading.variable
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="flex min-h-screen flex-col">
            <header className="sticky top-0 z-40 w-full border-b bg-background">
              <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
                <MainNav items={docsConfig.mainNav}>
                  <DocsSidebarNav items={docsConfig.sidebarNav} />
                </MainNav>
                <div className="flex flex-1 items-center space-x-4 sm:justify-end">
                  {/* <div className="flex-1 sm:grow-0">
                    <DocsSearch />
                  </div> */}
                  <nav className="flex items-center space-x-4">
                    <Link
                      href={siteConfig.links.github}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Icons.gitHub className="h-5 w-5" />
                      <span className="sr-only">GitHub</span>
                    </Link>
                    <ModeToggle />
                  </nav>
                </div>
              </div>
            </header>
            <div className="container flex-1">
              {children}
              <Analytics />
              <Toaster />       
            </div>
            <SiteFooter className="border-t" />
          </div>          
        </ThemeProvider>
      </body>
    </html>
  )
}
