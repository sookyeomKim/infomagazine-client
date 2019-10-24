const auth = async ({ next, store: { getters, dispatch } }) => {
  const date = new Date();
  const currentDateTime = date.getTime();
  const accessExpireTime = localStorage.getItem('accessExpireTime');
  const remainingExpireTime = accessExpireTime - currentDateTime;
  if (remainingExpireTime <= 0) {
    return dispatch('user/LogOut');
  }
  if (remainingExpireTime <= 7200000) {
    await dispatch('user/RefreshToken');
  }
  if (!getters['user/isLoggedIn']) {
    try {
      await dispatch('user/SetUserInfo');
    } catch (e) {
      return dispatch('user/LogOut');
    }
  }
  dispatch('app/layoutTypeSetDashboard');
  return next();
};

export default auth;
