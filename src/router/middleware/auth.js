const auth = async ({ next, store: { getters, dispatch } }) => {
  const date = new Date();
  const currentDateTime = date.getTime();
  const accessExpireTime = localStorage.getItem('accessExpireTime');
  const remainingExpireTime = accessExpireTime - currentDateTime;
  if (remainingExpireTime <= 0) {
    return dispatch('user/logOut');
  }
  if (remainingExpireTime <= 7200000) {
    await dispatch('user/refreshToken');
  }
  if (!getters['user/isLoggedIn']) {
    try {
      await dispatch('user/setUserInfo');
    } catch (e) {
      return dispatch('user/logOut');
    }
  }
  dispatch('app/layoutTypeSetDashboard');
  return next();
};

export default auth;
