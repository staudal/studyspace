import { NextRequest, NextResponse } from 'next/server'
import { hasCookie, setCookie } from 'cookies-next'

export function middleware(req) {
  const verified = hasCookie('next-auth.session-token') || hasCookie('__Secure-next-auth.session-token')

  if (req.nextUrl.pathname.startsWith('/fag')) {
    if (!verified) {
      const url = req.nextUrl.clone()
      url.pathname = '/auth/signin'
      return NextResponse.rewrite(url)
    }
  }
}
