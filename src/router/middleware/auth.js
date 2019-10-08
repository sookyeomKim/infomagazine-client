const auth = ({ next, store }) => {
  if (!store.getters['user/state'].loggedIn) {
    return next({
      name: 'login',
    });
  }
  return next();
};

export default auth;
