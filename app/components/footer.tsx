import Link from "next/link"

export default function Footer() {
  return (
    <footer>
      <div className="mt-16 flex flex-col items-center mb-3">
        <div className="mb-3 flex space-x-4">
        </div>
        <div className="mb-2 flex space-x-2 text-sm text-gray-500 dark:text-gray-400">
          <div>{`© ${new Date().getFullYear()}`}</div>
          <div>{` | `}</div>
          <Link href="/">노바 블로그</Link>
        </div>
      </div>
    </footer>
  )
}