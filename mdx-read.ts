import matter from 'gray-matter'
import path from 'path'
import fs from 'fs/promises'

export const getPost = async (slug: string) => {
  const postContent = await fs.readFile(`./app/blog/${slug}/page.mdx`, 'utf8')
  const { data, content } = matter(postContent)
  return { ...data, body: content }
}
