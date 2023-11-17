import { notFound } from "next/navigation"
import { allPosts } from "contentlayer/generated"

import { Mdx } from "@/components/mdx-components"

import "@/styles/mdx.css"
import { Metadata } from "next"
import Image from "next/image"

import { absoluteUrl, formatDate } from "@/lib/utils"

interface PostPageProps {
  params: {
    slug: string[]
  }
}

async function getPostFromParams(params) {
  const slug = params?.slug?.join("/")
  const post = allPosts.find((post) => post.slugAsParams === slug)

  if (!post) null
  
  return post
}

export async function generateMetadata({ params }: PostPageProps): Promise<Metadata> {
  const post = await getPostFromParams(params)

  if (!post) return {}

  const url = process.env.NEXT_PUBLIC_APP_URL

  const ogUrl = new URL(`${url}/${post.image}`)
  ogUrl.searchParams.set("heading", post.title)
  ogUrl.searchParams.set("type", "Blog Post")
  ogUrl.searchParams.set("mode", "dark")

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      url: absoluteUrl(post.slug),
      images: [
        {
          url: ogUrl.toString(),
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    }
  }
}

export async function generateStaticParams(): Promise<PostPageProps["params"][]> {
  return allPosts.map((post) => ({
    slug: post.slugAsParams.split("/"),
  }))
}

export default async function PostPage({ params }: PostPageProps) {
  const post = await getPostFromParams(params)

  if (!post) notFound()
  
  return (
    <article className="container relative max-w-3xl py-6 lg:py-10">
      <div>
        {post.date && (
          <time dateTime={post.date} className="block text-sm text-muted-foreground">
            {formatDate(post.date)}
          </time>
        )}
        <h1 className="mt-2 inline-block font-heading text-4xl leading-tight lg:text-5xl">
          {post.title}
        </h1>

        <div className="mt-4 flex space-x-4">
          <Image src="/images/avatartion.png" alt="아바타" width={42} height={42} className="rounded-full bg-white" />
          <div className="flex-1 text-left leading-tight">
            <p className="font-medium">윤정현(노바)</p>
            <p className="text-[12px] text-muted-foreground">프리랜서</p>
          </div>
        </div>
      </div>
      {post.image && (
        <Image
          src={post.image}
          alt={post.title}
          width={720}
          height={405}
          className="my-8 rounded-md border bg-muted transition-colors"
          priority
        />
      )}
      <Mdx code={post.body.code} />
    </article>
  )
}
