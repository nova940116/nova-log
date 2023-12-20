import { headers } from "next/headers"
import { getPostFrontmatter } from "@/mdx-read"

export const revalidate = 3600

export default async function MdxLayout({ children }: { children: React.ReactNode }) {
  const _headers = headers()
  const currentUrl = _headers.get("x-url")
  const slug = currentUrl?.replace(`${process.env.SITE_URL}/blog/`, "")
  if (!slug) return
  const post = await getPostFrontmatter(slug)

  return (
    <div>
      <h1>{post.title}</h1>
      <time>{post.date}</time>
      <article>{children}</article>
    </div>
  )
}
