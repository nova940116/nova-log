import { MDXRemote } from 'next-mdx-remote/rsc'
import { getPost, getPosts } from '@/app/utils'
import { notFound } from 'next/navigation' 
import { Code } from "bright"

type Params = {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  const posts = await getPosts()
 
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export default async function Post({ params }: any) {
  // MDX text - can be from a local file, database, CMS, fetch, anywhere...
  const post = await getPost(params.slug)
  if (!post) return notFound()
  const components = {
    pre: (props: any) => (
      <Code {...props}>
        {props.children}
      </Code>
    )
  }
  return (
    <main>
      <h1 className='text-2xl'>{post.title}</h1>
      <p className='py-2'>{post.date}</p>
      <MDXRemote source={post.body} components={components} />
    </main>
  )
}