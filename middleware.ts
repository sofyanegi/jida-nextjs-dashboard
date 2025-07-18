import { NextRequest, NextResponse } from 'next/server';
import { getToken } from 'next-auth/jwt';

export async function middleware(req: NextRequest) {
  const token = await getToken({ req, secret: process.env.AUTH_SECRET!, secureCookie: true });
  console.log(token);

  const isAuthenticated = !!token && (!token.exp || token.exp > Math.floor(Date.now() / 1000));

  const protectedRoutes = ['/dashboard'];
  const authPage = ['/login'];
  const { pathname } = req.nextUrl;

  const isProtectedRoute = protectedRoutes.some((route) => pathname.startsWith(route));

  if (!isAuthenticated && isProtectedRoute) {
    return NextResponse.redirect(new URL('/login', req.url));
  }

  if (isAuthenticated && authPage.includes(pathname)) {
    return NextResponse.redirect(new URL('/dashboard', req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/dashboard/:path*', '/login'],
};
