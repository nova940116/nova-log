import matter from 'gray-matter'
import path from 'path'
import type { Post, Doc } from './types'
import fs from 'fs/promises'
import { cache } from 'react'

// `cache` is a React 18 feature that allows you to cache a function for the lifetime of a request.
// this means getPosts() will only be called once per page build, even though we may call it multiple times
// when rendering the page.
export const getPosts = cache(async () => {
  const posts = await fs.readdir('./app/contents/posts/')
  
  return Promise.all(
    posts
      .filter((file) => path.extname(file) === '.mdx')
      .map(async (file) => {
        const filePath = `./app/contents/posts/${file}`
        const postContent = await fs.readFile(filePath, 'utf8')
        
        const { data, content } = matter(postContent)

        // if (data.published === false) {
        //   return null
        // }

        return { ...data, body: content } as Post
      })
  )
})

export async function getPost(slug: string) {
  const posts = await getPosts()
  return posts.find((post) => post?.slug === slug)
}

export const getDocs = cache(async () => {
  const docs = await fs.readdir('./app/contents/docs/')
  
  return Promise.all(
    docs
      .filter((file) => path.extname(file) === '.mdx')
      .map(async (file) => {
        const filePath = `./app/contents/docs/${file}`
        const docContent = await fs.readFile(filePath, 'utf8')
        
        const { data, content } = matter(docContent)

        // if (data.published === false) {
        //   return null
        // }

        return { ...data, body: content } as Doc
      })
  )
})

export default getPosts