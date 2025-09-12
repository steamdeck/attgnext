import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  // Temporarily disabled for static hosting
  // This middleware requires server-side processing which isn't available on static hosting
  return NextResponse.next()
}

export const config = {
  matcher: [
    '/admin/:path*'
  ]
}
