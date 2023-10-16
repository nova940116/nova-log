import Link from "next/link"

export default function Header() {
  return (
    <header className="px-4 py-8 mx-auto max-w-3xl flex justify-between">
      <h1 className="font-extrabold text-2xl">
        <Link href="/">노바로그</Link>
      </h1>
    </header>
  )
}