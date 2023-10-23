import { allPosts } from "@/.contentlayer/generated"
import Link from "next/link"
import { formatDataKR } from "./utils"

export default function Home() {
  return (
    <div className="prose dark:prose-invert">
      {allPosts.map((post) => (
        <article key={post._id}>
          <Link href={post.slug} className="no-underline">
            <h2>{post.title}</h2>
          </Link>
          <p>{post.description}</p>
          <p className="text-gray-400 text-sm">{formatDataKR(new Date(post.date))}</p>
        </article>
      ))}
    </div>
  )
}
