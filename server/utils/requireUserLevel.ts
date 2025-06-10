import { getCurrentUser } from './getCurrentUser';
import type { H3Event } from 'h3';

export function requireUserlevel(event: H3Event, maxLevel: number) {
  const user = getCurrentUser(event);
  if (!user) {
    throw createError({ statusCode: 401, statusMessage: 'Not logged in' });
  }

  if (user.userlevel >= maxLevel) {
    throw createError({ statusCode: 403, statusMessage: 'Access denied' });
  }

  return user;
}
