/* eslint-disable import/no-extraneous-dependencies */
/* eslint no-underscore-dangle: [2, { "allow": ["_axios","_vue"] }] */

import Vue from 'vue';
import axios from 'axios';

// Full config:  https://github.com/axios/axios#request-config
// axios.defaults.baseURL = process.env.baseURL || process.env.apiUrl || '';
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

const axiosConfig = {
  // baseURL: process.env.baseURL || process.env.apiUrl || ""
  // timeout: 60 * 1000, // Timeout
  withCredentials: true, // Check cross-site Access-Control
  xsrfCookieName: 'csrftoken',
  xsrfHeaderName: 'x-csrftoken',
};

const _axios = axios.create(axiosConfig);

_axios.interceptors.request.use(
  config => config,
  error => Promise.reject(error),
);

// Add a response interceptor
_axios.interceptors.response.use(
  response => response,
  error => Promise.reject(error),
);

Plugin.install = (vue) => {
  const _vue = vue;
  _vue.axios = _axios;
  window.axios = _axios;
  Object.defineProperties(_vue.prototype, {
    axios: {
      get() {
        return _axios;
      },
    },
    $axios: {
      get() {
        return _axios;
      },
    },
  });
};

Vue.use(Plugin);

export default Plugin;
