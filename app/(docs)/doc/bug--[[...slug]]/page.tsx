import { MDXRemote } from 'next-mdx-remote/rsc'
import { getDoc, getDocs } from '@/app/utils'
import { notFound } from 'next/navigation' 
import { Code } from "bright"

type Params = {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  const docs = await getDocs()

  return docs.map((doc) => ({
    params: { slug: doc.slug }
  }))
}

export default async function Doc({ params }: Params) {
  const slug = params.slug && params.slug.length ? params.slug[0] : 'index'
  const doc = await getDoc(slug)
  if (!doc) return notFound()
  const components = {
    pre: (props: any) => (
      <Code {...props}>
        {props.children}
      </Code>
    )
  }
  return (
    <main>
      <h1 className='text-2xl font-bold'>{doc.title}</h1>
      <p className='py-2'>{doc.description}</p>
      <MDXRemote source={doc.body} components={components} />
    </main>
  )
}