import { getPosts } from "@/app/utils"
import Link from 'next/link'

export default async function Home() {
  const posts = await getPosts()
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {posts.map((post) => 
        <Link href={`/post/${post?.slug}`} key={post?.slug}>
          <article>
            <h2>{post?.title}</h2>
          </article>  
        </Link>
      )}
    </main>
  )
}
