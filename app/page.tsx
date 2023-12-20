import { articles } from "@/articles"
import Link from "next/link"

export default function Home() {
  return (
    <main className="pt-32">
      {
        articles.map((article) => 
          <article key={article.title} className="px-4">
            <Link href={`/blog/${article.slug}`}>
              <h2 className="text-2xl font-bold mb-5">{article.title}</h2>
              <p className="mb-5">{article.description}</p>
              <time>{article.date}</time>
            </Link>
          </article>
        )
      }
    </main>
  )
}
