import { dbConnect } from '~/server/utils/dbConnect';
import { H3Event, setCookie, getHeader } from 'h3';

export default defineEventHandler(async (event: H3Event) => {
  const body = await readBody(event);
  const { username, password } = body;

  const db = await dbConnect();
  const [rows] = await db.query(
    'SELECT uid, username, password, userlevel FROM users WHERE username = ? LIMIT 1',
    [username]
  );

  if (!Array.isArray(rows) || rows.length === 0) {
    return { success: false, message: 'Invalid username or password' };
  }

  const user = rows[0] as any;

  if (user.password !== password) {
    return { success: false, message: 'Invalid username or password' };
  }

  // Save session info in a cookie (UID + userlevel)
  setCookie(event, 'session', JSON.stringify({
    uid: user.uid,
    userlevel: user.userlevel,
  }), {
    httpOnly: true,
    path: '/',
    maxAge: 60 * 60 * 24, // 1 day
  });

  return { success: true, uid: user.uid, userlevel: user.userlevel };
});
