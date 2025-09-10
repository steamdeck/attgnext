import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Check if the request is for an admin route
  if (pathname.startsWith('/admin') && pathname !== '/admin/login') {
    // Get the admin token from cookies or headers
    const adminToken = request.cookies.get('admin_token')?.value ||
                      request.headers.get('authorization')?.replace('Bearer ', '')

    if (!adminToken) {
      // Redirect to login if no token
      return NextResponse.redirect(new URL('/admin/login', request.url))
    }

    // In a real app, you would verify the JWT token here
    // For now, we'll let the client-side handle the verification
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    '/admin/:path*'
  ]
}
