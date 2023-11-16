import { DocsConfig } from "types"

export const docsConfig: DocsConfig = {
  mainNav: [
    {
      title: "포스트",
      href: "/"
    },
    {
      title: "문서",
      href: "/docs",
    }
  ],
  sidebarNav: [
    {
      title: "언어",
      items: [
        {
          title: "Javascript",
          href: "/docs/javascript",
        },
      ],
    },
    {
      title: "프레임워크",
      items: [
        {
          title: "Vue",
          href: "/docs/vue"
        },
        {
          title: "React",
          href: "/docs/react"
        },
      ]
    }
  ],
}