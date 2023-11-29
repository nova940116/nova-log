import { MDXRemote } from 'next-mdx-remote/rsc'
import { getPost } from '@/app/utils'
import { notFound } from 'next/navigation' 
import { Code } from "bright"

type Params = {
  params: {
    slug: string
  }
}

export default async function RemoteMdxPage(params: Params) {
  // MDX text - can be from a local file, database, CMS, fetch, anywhere...
  const post = await getPost(params.params.slug)
  if (!post) return notFound()
  const components = {
    h1: (props: any) => (
      <h1 {...props} className="text-red-600">
        {props.children}
      </h1>
    ),
    pre: Code
  }
  return <MDXRemote source={post.body} components={components} />
}