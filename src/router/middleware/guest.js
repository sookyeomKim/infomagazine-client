const guest = ({ next, store }) => {
  if (store.getters['user/state'].loggedIn) {
    return next({
      name: 'home',
    });
  }
  return next();
};

export default guest;
