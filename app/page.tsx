import Link from "next/link"
import { compareDesc, format, parseISO } from "date-fns"
import { allPosts, Post } from "contentlayer/generated"

function PostCard(post: Post) {
  return (
    <div className="py-4 cursor-pointer">  
      <Link href={post.url}>
        <div>
          <h1 className="text-xl font-bold mb-5">{post.title}</h1>
          <p className="text-md mb-5">{post.summary}</p>
          <time dateTime={post.date} className="block text-sm">
            {format(parseISO(post.date), "yyyy.MM.dd")}
          </time>  
        </div>
      </Link>
    </div>
  )
}

export default function Home() {
  const posts = allPosts.sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)))

  return (
    <div className="max-w-3xl px-4 py-8 mx-auto divide-y divide-gray-200 dark:divide-gray-700">
      {posts.map((post, idx) => (
        <PostCard key={idx} {...post} />
      ))}      
    </div>
  )
}
