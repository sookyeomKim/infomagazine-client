const guest = ({ next, store }) => {
  store.dispatch('app/layoutTypeSetPlain');
  return next();
};

export default guest;
