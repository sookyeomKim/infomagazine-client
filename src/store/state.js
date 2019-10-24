// https://vuex.vuejs.org/en/state.html

export default {
  obtainTokenUrl: `${process.env.VUE_APP_ENV_BASE_URL}/v1/auth/`,
  refreshTokenUrl: `${process.env.VUE_APP_ENV_BASE_URL}/v1/auth/refresh/`,
  deleteTokenUrl: `${process.env.VUE_APP_ENV_BASE_URL}/v1/auth/delete/`,

  getAuthInfoUrl: `${process.env.VUE_APP_ENV_BASE_URL}/v1/users/authInfo/`,
};
