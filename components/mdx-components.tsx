import Image from "next/image"
import { Fira_Mono } from "next/font/google"
import { useMDXComponent } from "next-contentlayer/hooks"

const FiraMono = Fira_Mono({ subsets: ["latin"], weight: ["400", "700"] })

const components = {
  // eslint-disable-next-line jsx-a11y/alt-text
  Image: (props: any) => (<Image {...props} />),
  pre: ({ children }: any) => <pre className={FiraMono.className}>{children}</pre>
}

interface MdxProps {
  code: string
}

export function Mdx({ code }: MdxProps) {
  const Component = useMDXComponent(code)

  return <Component components={components} />
}
