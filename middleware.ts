import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { AuthOptions } from 'next-auth'
 
// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  if(request.nextUrl.pathname.startsWith("/arsip")){
    return NextResponse.redirect(new URL('/', request.url))
  }
}
 
// See "Matching Paths" below to learn more
export const config = {
  matcher: '/admin/:path*',
}