import { getCookie } from 'h3';
import type { H3Event } from 'h3';

export function getCurrentUser(event: H3Event) {
  const session = getCookie(event, 'session');
  if (!session) return null;

  try {
    return JSON.parse(session);
  } catch {
    return null;
  }
}
