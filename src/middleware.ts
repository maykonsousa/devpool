/* eslint-disable no-restricted-exports */
export { default } from 'next-auth/middleware';

export const config = {
  matcher: ['/community', '/settings', '/search-profiles', '/jobs'],
};
