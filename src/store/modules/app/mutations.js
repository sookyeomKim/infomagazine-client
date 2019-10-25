export default {
  changeLayoutType(state, type) {
    state.layoutType = type;
  },
  setDrawer(state, payload) {
    state.drawer = payload;
  },
  toggleDrawer(state) {
    state.drawer = !state.drawer;
  },
};
