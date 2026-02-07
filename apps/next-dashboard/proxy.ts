import NextAuth from 'next-auth';
import { authConfig } from './auth.config';

export default NextAuth(authConfig).auth;

export const config = {
  // https://nextjs.org/docs/app/api-reference/file-conventions/proxy#matcher
  matcher: [
    // Exclude Next internals + static metadata routes (favicon / icons / social images)
    '/((?!api|_next/static|_next/image|favicon\\.ico|icon|apple-icon|opengraph-image|twitter-image|robots\\.txt|sitemap\\.xml|.*\\.png$).*)',
  ],
};
