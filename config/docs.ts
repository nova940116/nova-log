import { DocsConfig } from "types"

export const docsConfig: DocsConfig = {
  mainNav: [
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
        {
          title: "HTML",
          href: "/docs/html",
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
