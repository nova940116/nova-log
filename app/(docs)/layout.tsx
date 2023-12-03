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
  return (
    <main className="flex flex-wrap">
      <section>
        <nav className="flex flex-col px-10 py-16 w-[200px]">
        {docs.map((doc) => 
          <>
            {doc.slug !== 'index' && <Link className="py-2" href={`/doc/${doc.slug}`}>{doc.title}</Link>}
          </>
        )}
        </nav>
      </section>
      <section className="mx-auto max-w-2xl min-w-[768px] px-4 py-10">
        { children }
      </section>
      <section className="w-[200px]"></section>
    </main>
  )
}