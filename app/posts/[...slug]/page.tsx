import { notFound } from "next/navigation"
import { allPosts } from "contentlayer/generated"
import { Metadata } from "next"
import { Mdx } from "@/components/mdx-components"
import { formatDataKR } from "@/app/utils"
import Image from "next/image"

interface PostProps {
  params: {
    slug: string[]
  }
}

async function getPostFromParams(params: PostProps["params"]) {
  const slug = params?.slug?.join("/")
  const post = allPosts.find((post) => post.slugAsParams === slug)

  if (!post) {
    null
  }

  return post
}

export async function generateMetadata({
  params,
}: PostProps): Promise<Metadata> {
  const post = await getPostFromParams(params)

  if (!post) {
    return {}
  }

  return {
    title: post.title,
    description: post.description
  }
}

export async function generateStaticParams(): Promise<PostProps["params"][]> {
  return allPosts.map((post) => ({
    slug: post.slugAsParams.split("/"),
  }))
}

export default async function PostPage({ params }: PostProps) {
  const post = await getPostFromParams(params)

  if (!post) {
    notFound()
  }

  return (
    <article className="py-6 prose dark:prose-invert max-w-3xl">
      <h1 className="mb-2 leading-snug">{post.title}</h1> 
      <div className='flex'>
        <Image className='rounded-full border border-black/[.1]' width={48} height={48} src="/avatartion.png" alt="author" />
        <div className='flex flex-col justify-center p-4'>
          <span className="font-semibold">윤정현(Nova)</span>
          <span className='text-[#888] text-sm'>{formatDataKR(new Date(post!.date))}</span>
        </div>
      </div>
      <hr className="my-4" />
      <Mdx code={post.body.code} />
    </article>
  )
}
