import type { MDXComponents } from 'mdx/types'
import { Code } from "bright" 
import Image from 'next/image'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return { ...components, pre: Code, Image: (props) => <Image {...props} /> }
}