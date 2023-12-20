import { NextResponse, type NextRequest } from "next/server"

export async function middleware(request: NextRequest) {
  // console.log("reqqq", request)
  const requestHeaders = new Headers(request.headers)
  requestHeaders.set("x-url", request.url)
  return NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  })
}