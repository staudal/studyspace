import { NextRequest, NextResponse } from 'next/server'

export function middleware(req) {
  let sessionCookie = req.cookies.has('next-auth.session-token') || req.cookies.has('__Secure-next-auth.session-token')

  if (req.nextUrl.pathname.startsWith('/fag')) {
    if (!sessionCookie) {
      const url = req.nextUrl.clone()
      url.pathname = '/auth/signin'
      return NextResponse.rewrite(url)
    }
  }
}
