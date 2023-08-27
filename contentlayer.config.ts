import { defineDocumentType, makeSource } from 'contentlayer/source-files'
import { remarkCodeTitles } from 'pliny/mdx-plugins/index.js'
import remarkGfm from 'remark-gfm'
import rehypePrismPlus from 'rehype-prism-plus'


const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: `**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
    summary: { type: 'string' },
    date: { type: 'date', required: true },
    hide: { type: 'boolean' }
  },
  computedFields: {
    url: {
      type: 'string',
      resolve: (doc) => `/posts/${doc._raw.flattenedPath}`,
    }
  },
}))

export default makeSource({
  contentDirPath: 'posts',
  documentTypes: [Post],
  mdx: {
    remarkPlugins: [remarkGfm, remarkCodeTitles],
    rehypePlugins: [rehypePrismPlus],
  },   
  onSuccess: async (importData) => {
    const { allPosts } = await importData()
  },  
})
