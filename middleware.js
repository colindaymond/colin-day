import { NextResponse } from 'next/server'

export function middleware(request) {
  const hostname = request.headers.get('host') || ''
  const pathname = request.nextUrl.pathname

  // If the request is coming from foggynotions.day
  if (hostname.includes('foggynotions.day')) {
    // Only rewrite the root path to /foggynotions
    // Let other paths (/subscribe, /api/*, etc.) pass through
    if (pathname === '/') {
      return NextResponse.rewrite(new URL('/foggynotions', request.url))
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    // Match all paths except static files and api routes
    '/((?!_next/static|_next/image|favicon.ico|images).*)',
  ],
}
