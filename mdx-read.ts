import matter from 'gray-matter'
import path from 'path'
import fs from 'fs/promises'
import type { Post } from "@/types"

export const getPostFrontmatter = async (slug: string) => {
  const postContent = await fs.readFile(`./app/blog/${slug}/page.mdx`, 'utf8')
  const { data } = matter(postContent)
  return data as Post
}
