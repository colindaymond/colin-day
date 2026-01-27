import { NextResponse } from 'next/server'

export function middleware(request) {
  const hostname = request.headers.get('host') || ''

  // If the request is coming from foggynotions.day, serve the foggynotions page
  if (hostname.includes('foggynotions.day')) {
    // Rewrite to /foggynotions for any path on foggynotions.day
    return NextResponse.rewrite(new URL('/foggynotions', request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    // Match all paths except static files and api routes
    '/((?!_next/static|_next/image|favicon.ico|images).*)',
  ],
}
