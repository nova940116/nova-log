import { allPosts } from 'contentlayer/generated'
import { getMDXComponent } from 'next-contentlayer/hooks'
import Comments from '@/app/components/comments'
import '@/app/prism.css'

type Props = {
  params: {
    slug: string
  }
}

export const generateStaticParams = async () => allPosts.map((post) => ({ slug: post._raw.flattenedPath }))

export const generateMetadata = ({ params }: Props) => {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug)
  return { 
    title: post?.title, 
    description: post?.summary,
    openGraph: {
      title: post?.title,
      description: post?.summary,
      url: 'https://nova-log.vercel.app',
      siteName: 'Next13 Blog Starter',
      images: [
        {
          url: 'https://nova-log.vercel.app/thumbnail.png',
          width: 800,
          height: 600,
        },
      ]      
    } 
  }
}

const PostLayout = ({ params }: { params: { slug: string } }) => {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug)
  const Content = getMDXComponent(post!.body.code)

  return (
    <article className="px-4 py-8 mx-auto max-w-3xl prose dark:prose-invert prose-code:font-sans">
      <div className="mb-24 text-center">
        <h1>{post?.title}</h1>
      </div>
      <Content />
      <hr />
      <Comments
        repo={process.env.NEXT_PUBLIC_GISCUS_REPO!} 
        repositoryId={process.env.NEXT_PUBLIC_GISCUS_REPOSITORY_ID!} 
        category={process.env.NEXT_PUBLIC_GISCUS_CATEGORY!} 
        categoryId={process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID!}
        mapping="pathname"
        reactions="0" 
        metadata="0" 
        theme="light" 
        darkTheme="transparent_dark"
        themeURL=""
        lang="ko" 
      />
    </article>
  )
}

export default PostLayout
