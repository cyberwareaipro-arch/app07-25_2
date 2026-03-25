import { NextResponse } from 'next/server'

export function middleware(request) {
  const referer = request.headers.get('referer')
  const { pathname } = request.nextUrl
  
  const protectedPaths = ['/flow/callbacks/exito', '/flow/callbacks/fallo']
  
  if (protectedPaths.some(path => pathname.startsWith(path))) {
    if (!referer || !referer.includes('https://sandbox.flow.cl/')) {
      return NextResponse.redirect(new URL('/', request.url)) // Avoid access denied loop if /acceso-denegado doesn't exist
    }
  }
  
  return NextResponse.next()
}

export const config = {
  matcher: ['/flow/callbacks/exito/:path*', '/flow/callbacks/fallo/:path*']
}
