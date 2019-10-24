export default {
  layoutTypeSetDashboard(context) {
    context.commit('changeLayoutType', 'dashboard');
  },
  layoutTypeSetPlain(context) {
    context.commit('changeLayoutType', 'plain');
  },
};
