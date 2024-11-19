// src/middleware.js

import { NextResponse } from 'next/server';
import { auth } from '@/auth';

export async function middleware(req) {
  const session = await auth();

  const protectedRoutes = ['/dashboard', '/dashboard/*'];

  if (protectedRoutes.some((route) => req.nextUrl.pathname.startsWith(route))) {
    if (!session?.user) {
      return NextResponse.redirect(new URL('/sign-in', req.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/dashboard/:path*'],
};
