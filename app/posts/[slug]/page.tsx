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
      siteName: '노바로그',
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
    <article className="px-4 py-8 mx-auto max-w-3xl prose">
      <div className="text-center">
        <h1 className='leading-[1.5]'>{post?.title}</h1>
      </div>
      <div className='flex'>
        <Image className='rounded-full border border-black/[.1]' width={48} height={48} src="/avatartion.png" alt="author" />
        <div className='flex flex-col justify-center p-4'>
          <span>윤정현(Nova)</span>
          <span className='text-[#888] text-sm'>{formatDataKR(new Date(post!.date))}</span>
        </div>
      </div>
      <div className="break-all">
        <Content />
      </div>
      <div className='flex'>
        <Image className='rounded-full border border-black/[.1]' width={72} height={72} src="/avatartion.png" alt="author" />
        <div className='flex flex-col justify-center p-4'>
          <span>윤정현(Nova)</span>
        </div>
        <div>
        </div>
      </div>
      <div>
        🙂 사이드 프로젝트 개발 및 운영을 취미로 삼고있습니다<br />
        🗃️ 운영중인 프로젝트<br />
        - <a href="https://foryouwave.com" target='_blank' className='underline-offset-4'>널위한물결</a><br />
        - <a href="https://thumbnail-maker.vercel.app" target='_blank' className='underline-offset-4'>썸네일제작소</a><br />
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
