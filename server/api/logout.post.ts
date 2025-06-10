export default defineEventHandler((event) => {
    // Clear session cookie
    setCookie(event, 'session', '', {
      httpOnly: true,
      secure: true,
      sameSite: 'lax',
      path: '/',
      maxAge: 0,
    });
  
    return { message: 'Logged out' };
  });
  