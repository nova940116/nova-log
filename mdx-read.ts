import matter from 'gray-matter'
import path from 'path'
import fs from 'fs/promises'
import type { Post } from "@/types"
import { cache } from 'react'

export const getPostFrontmatter = cache(async (slug: string) => {
  const postContent = await fs.readFile(`./app/blog/${slug}/page.mdx`, 'utf8')
  const { data } = matter(postContent)
  return data as Post
})
