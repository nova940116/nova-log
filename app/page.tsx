import { getPosts } from "@/app/utils"
import Link from 'next/link'

export default async function Home() {
  const posts = await getPosts()
  return (
    <main>
      {posts.map((post) => 
        <Link href={`/post/${post?.slug}`} key={post?.slug}>
          <article>
            <h2>{post?.title}</h2>
            <p>{post?.description}</p>
          </article>  
        </Link>
      )}
    </main>
  )
}
