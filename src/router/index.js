import Vue from 'vue';
import Router from 'vue-router';
import store from '@/store';
import Home from '@/views/Home.vue';

import middlewarePipeline from './middlewarePipeline';
import guest from './middleware/guest';
import auth from './middleware/auth';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: {
        middleware: [
          guest,
        ],
      },
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '@/views/About.vue'),
      meta: {
        middleware: [
          auth,
        ],
      },
    },
  ],
});

router.beforeEach((to, from, next) => {
  if (!to.meta.middleware) {
    return next();
  }
  const { middleware } = to.meta;

  const context = {
    to,
    from,
    next,
    store,
  };

  return middleware[0]({
    ...context,
    next: middlewarePipeline({ ...context }, middleware, 1),
  });
});
export default router;
