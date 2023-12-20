import { headers } from "next/headers"

export default function MdxLayout({ children }: { children: React.ReactNode }) {
  const _headers = headers()
  const currentUrl = _headers.get("x-url")
  console.log("url>>", currentUrl)  
  return <div style={{ color: 'blue' }}>{children}</div>
}