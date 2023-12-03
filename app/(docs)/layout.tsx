import Link from "next/link"
import { getDocs } from "@/app/utils"

type DocsLayoutProps = {
  children: React.ReactNode
}

export async function generateStaticParams() {
  const docs = await getDocs()
 
  return docs.map((doc) => ({
    slug: doc.slug,
  }))
}

export default async function DocsLayout({ children }: DocsLayoutProps) {
  const docs = await getDocs()
  console.log(docs, '@?')
  return (
    <main className="flex">
      <section>
        <nav className="flex flex-col">
        {docs.map((doc) => 
          <>
            <Link href={`/doc/${doc.slug}`}>{doc.title}</Link>
          </>
        )}
        </nav>
      </section>
      <section className="max-w-2xl mx-auto px-4 py-10">
        { children }
      </section>
      <section></section>
    </main>
  )
}