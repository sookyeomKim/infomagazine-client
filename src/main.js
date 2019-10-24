import Vue from 'vue';
import VueCookies from 'vue-cookies';

import router from './router';
import store from './store';
import vuetify from './plugins/vuetify';
import './plugins/axios';

import App from './App.vue';

Vue.use(VueCookies);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App),
}).$mount('#app');
