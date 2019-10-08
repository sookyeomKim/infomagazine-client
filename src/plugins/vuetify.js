import 'babel-polyfill';
import Vue from 'vue';
import Vuetify from 'vuetify/lib';

/* eslint-disable import/no-extraneous-dependencies */
import 'material-design-icons-iconfont/dist/material-design-icons.css';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    dark: true,
  },
  icons: {
    iconfont: 'md',
  },
});
