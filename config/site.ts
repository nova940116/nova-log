import { SiteConfig } from "types"

export const siteConfig: SiteConfig = {
  name: "노바로그",
  description: "개발 관련 포스팅, 개발 관련 문서 정리",
  url: process.env.NEXT_PUBLIC_APP_URL!,
  links: {
    twitter: "https://twitter.com/nova940116",
    github: "https://github.com/nova940116",
  },
}
