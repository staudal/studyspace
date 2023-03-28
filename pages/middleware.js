export { default } from 'next-auth/middleware'

export const config = {
  matcher: ['/fag/biologi-a'],
  secret: process.env.NEXTAUTH_SECRET,
}
