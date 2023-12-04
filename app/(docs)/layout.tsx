import { getDocs } from "@/app/utils"
import DocSidebarNav from "@/components/doc-sidebar-nav"

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
    <main className="mx-auto max-w-4xl px-4 py-5 flex flex-wrap">
      <section>
        <DocSidebarNav docs={docs} />
      </section>
      <section className="px-4 py-5 w-full max-w-2xl">
        { children }
      </section>
      {/* <section className=""></section> */}
    </main>
  )
}