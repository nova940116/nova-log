import Link from "next/link"

type DocsLayoutProps = {
  children: React.ReactNode
}

export default function DocsLayout({ children }: DocsLayoutProps) {
  return (
    <main>
      <section>
        <nav className="flex flex-col">
          <Link href="/doc/javascript">t</Link>
          <Link href="/doc/vue">e</Link>
        </nav>
      </section>
      <section className="max-w-2xl mx-auto px-4 py-10">
        { children }
      </section>
      <section></section>
    </main>
  )
}