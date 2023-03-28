import { NextRequest, NextResponse } from 'next/server'

export function middleware(req) {
  const sessionCookie = req.cookies.get('next-auth.session-token')

  if (req.nextUrl.pathname.startsWith('/fag')) {
    if (!sessionCookie) {
      const url = req.nextUrl.clone()
      url.pathname = '/auth/signin'
      return NextResponse.rewrite(url)
    }
  }
}
