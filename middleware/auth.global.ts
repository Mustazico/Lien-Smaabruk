export default defineNuxtRouteMiddleware(async (to) => {
    if (to.path === '/') return;
  
    try {
      const { data, error } = await useFetch('/api/profile');
  
      if (error.value || !data.value) {
        return navigateTo('/');
      }
  
      const user = data.value;
  
      const maxLevel = to.meta.maxLevel;
      if (typeof maxLevel === 'number' && user.userlevel >= maxLevel) {
        return navigateTo('/');
      }
    } catch (e) {
      return navigateTo('/');
    }
  });
  