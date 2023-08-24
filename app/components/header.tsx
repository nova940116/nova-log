import Link from "next/link"
import ThemeSwitch from "./themeSwitch"

export default function Header() {
  return (
    <header className="px-4 py-8 mx-auto max-w-3xl flex justify-between">
      <h1 className="font-bold text-xl">
        <Link href="/">Next13 Blog Starter</Link>
      </h1>
      <ThemeSwitch />
    </header>
  )
}