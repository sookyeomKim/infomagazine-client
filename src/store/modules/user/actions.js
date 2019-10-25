import Vue from 'vue';
import Decoder from 'jwt-decode';
import $router from '@/router';

export default {
  async logIn({ dispatch, rootGetters }, payload) {
    let tokenSet;
    try {
      const obtainTokenUrl = rootGetters.getUrl('obtainTokenUrl');
      const { data } = await Vue.axios.post(obtainTokenUrl, payload);
      tokenSet = data;
    } catch (e) {
      throw e.response;
    }
    await dispatch('setAuthInfoToLS', tokenSet);
    $router.push('/');
  },
  async logOut({ commit, rootGetters }) {
    try {
      const deleteTokenUrl = rootGetters.getUrl('deleteTokenUrl');
      await Vue.axios.post(deleteTokenUrl);
    } catch (e) {
      console.log('Failed to delete token.');
    }
    commit('setUserInfo', null);
    localStorage.clear();
    $router.push('/login');
  },
  setAuthInfoToLS(context, { access, refresh }) {
    const decodedAccessToken = Decoder(access);
    const accessExpireTime = decodedAccessToken.exp * 1000;
    localStorage.setItem('accessExpireTime', accessExpireTime);
    if (refresh) {
      const decodedRefreshToken = Decoder(refresh);
      const refreshExpireTime = decodedRefreshToken.exp * 1000;
      localStorage.setItem('refreshExpireTime', refreshExpireTime);
    }
  },
  async setUserInfo({ commit, dispatch, rootGetters }) {
    const getUserInfoUrl = rootGetters.getUrl('getAuthInfoUrl');
    try {
      const { data: response } = await Vue.axios.get(getUserInfoUrl);
      commit('setUserInfo', response);
      await dispatch('backgroundRefreshToken');
      return response;
    } catch (e) {
      throw e.response;
    }
  },
  async refreshToken({ dispatch, rootGetters }) {
    let tokenSet;
    try {
      const refreshTokenUrl = rootGetters.getUrl('refreshTokenUrl');
      const { data } = await Vue.axios.post(refreshTokenUrl);
      tokenSet = data;
    } catch (e) {
      throw e.response;
    }
    await dispatch('setAuthInfoToLS', tokenSet);
  },
  backgroundRefreshToken({ dispatch }) {
    const setAsyncTimeout = (cb, timeout = 0) => new Promise((resolve) => {
      const timeOut = setTimeout(() => {
        cb();
        clearTimeout(timeOut);
        resolve();
      }, timeout);
    });

    const callBack = async () => {
      try {
        await dispatch('refreshToken');
        await dispatch('backgroundRefreshToken');
      } catch ({ status }) {
        console.log('Failed to refresh token.');
        await dispatch('logOut');
      }
    };
    setAsyncTimeout(callBack, 14400000);
  },
};
