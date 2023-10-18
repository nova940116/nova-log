import { MetadataRoute } from 'next'
import { allPosts } from 'contentlayer/generated'

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = "https://nova-log.vercel.app"
  const posts = allPosts.filter(v => !v.hide)
  const postRoutes = posts.map((post) => ({
    url: `${siteUrl}${post.url}`,
    lastModified: post.date,
  }))
  postRoutes.push({
    url: siteUrl,
    lastModified: '2023-10-18'
  })
  return [...postRoutes]
}