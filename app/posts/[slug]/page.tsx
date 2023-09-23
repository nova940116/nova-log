import { allPosts } from 'contentlayer/generated'
import { getMDXComponent } from 'next-contentlayer/hooks'
import { formatDataKR } from '@/utils'
import Image from 'next/image'
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
    <article className="px-4 py-8 mx-auto max-w-3xl prose dark:prose-invert">
      <div className="text-center">
        <h1 className='leading-[1.5]'>{post?.title}</h1>
      </div>
      <div className='flex'>
        <Image className='rounded-full border border-black/[.1] dark:border-[#888]' width={48} height={48} src="/avatartion.png" alt="author" />
        <div className='flex flex-col justify-center p-4'>
          <span>윤정현(Nova)</span>
          <span>{formatDataKR(new Date(post!.date))}</span>
        </div>
      </div>
      <div className="break-all">
        <Content />
      </div>
      <div className='flex'>
        <Image className='rounded-full border border-black/[.1] dark:border-[#888]' width={72} height={72} src="/avatartion.png" alt="author" />
        <div className='flex flex-col justify-center p-4'>
          <span>윤정현(Nova)</span>
        </div>
        <div>
        </div>
      </div>
      <div>
        👨‍💻 서울에서 프리랜서로 일하고 있는 개발자 입니다.<br />
        ✅ 2022. 08 ~ 2023. 03 SK렌터카<br />
        ✅ 2023. 08 ~ SK-ON<br />
        🖥️ <a href="https://foryouwave.com">널위한물결</a> 이라는 서비스를 운영하고 있습니다.
      </div>
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
