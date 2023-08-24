import Link from "next/link"
import ThemeSwitch from "./themeSwitch"

export default function Header() {
  return (
    <header className="px-4 py-8 mx-auto max-w-3xl flex justify-between">
      <h1 className="font-bold text-xl">
        <Link href="/">노바 블로그</Link>
      </h1>
      <ThemeSwitch />
    </header>
  )
}