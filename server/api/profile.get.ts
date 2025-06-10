import { getCurrentUser } from '~/server/utils/getCurrentUser';

export default defineEventHandler((event) => {
  const user = getCurrentUser(event);

  if (!user) {
    throw createError({ statusCode: 401, statusMessage: 'Unauthorized' });
  }

  return {
    uid: user.uid,
    userlevel: user.userlevel,
    message: 'You are logged in!',
  };
});
