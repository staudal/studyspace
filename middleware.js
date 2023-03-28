import { NextRequest, NextResponse } from 'next/server'

export function middleware(req) {
  let sessionCookie = req.cookies.get('next-auth.session-token')

  if (!sessionCookie) {
    sessionCookie = req.cookies.get('__Secure-next-auth.session-token')
  }

  console.log(sessionCookie)

  if (req.nextUrl.pathname.startsWith('/fag')) {
    if (!sessionCookie) {
      const url = req.nextUrl.clone()
      url.pathname = '/auth/signin'
      return NextResponse.rewrite(url)
    }
  }
}
