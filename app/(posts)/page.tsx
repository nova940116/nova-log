import { getPosts } from "@/app/utils"
import Link from 'next/link'

export default async function Home() {
  const posts = await getPosts()
  return (
    <main>
      <section></section>
      <section>
        {posts.map((post) => 
          <Link href={`/post/${post?.slug}`} key={post?.slug}>
            <article>
              <h2 className="font-bold text-xl">{post?.title}</h2>
              <p className="py-3">{post?.description}</p>
              <p>{post?.date}</p>
            </article>  
          </Link>
        )}
      </section>
      <section></section>
    </main>
  )
}
