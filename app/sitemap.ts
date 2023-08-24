import { MetadataRoute } from 'next'
import { allPosts } from 'contentlayer/generated'

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = "https://next13-blog-starter-psi.vercel.app"
  const postRoutes = allPosts.map((post) => ({
    url: `${siteUrl}${post.url}`,
    lastModified: post.date,
  }))

  // const routes = ['', 'blog', 'projects', 'tags'].map((route) => ({
  //   url: `${siteUrl}/${route}`,
  //   lastModified: new Date().toISOString().split('T')[0],
  // }))

  return [...postRoutes]
}