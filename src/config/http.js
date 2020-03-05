import Vue from 'vue';
// import uuid from 'uuid';
import axios from 'axios';
import store from '@/store';
// import router from '@/router';
// import { MessageBox, Message } from 'element-ui';

Vue.prototype.$http = axios;

axios.defaults.baseURL = process.env.VUE_APP_BASE_API;
axios.defaults.timeout = process.env.VUE_APP_TIME_OUT;

// const showLoading = (id = uuid()) => {
//   store.commit('Loading/pushLoad', id);
//   return id;
// };

const hideLoading = id => {
  store.commit('Loading/removeLoad', id);
};

axios.interceptors.request.use(
  config => {
    const { msgLangCd, accesstoken } = store.getters['Options/all'];
    const modifiedConfig = config;

    modifiedConfig.headers.accesstoken =
      modifiedConfig.headers.accesstoken || accesstoken;
    modifiedConfig.data = modifiedConfig.data || {};
    modifiedConfig.data.msgLangCd = modifiedConfig.data.msgLangCd || msgLangCd;

    if (!modifiedConfig.timeout) {
      modifiedConfig.timeout = process.env.VUE_APP_TIME_OUT;
    }

    // if (modifiedConfig.showLoading) {
    //   modifiedConfig.loadingKey = showLoading();
    // }

    console.log('>>>>>> ' + axios.defaults.baseURL + modifiedConfig.url);

    return modifiedConfig;
  },
  error => Promise.reject(error)
);

axios.interceptors.response.use(
  response => {
    if (response.config.responseType === 'blob') return response;
    if (response.config.loadingKey) hideLoading(response.config.loadingKey);

    if (response.status !== 200) {
      return Promise.reject(new Error(`response.status: ${response.status}`));
    }
    if (response.data.resultCode && response.data.resultCode !== 200) {
      return Promise.reject(
        new Error(
          `Code ${response.data.resultCode}: ${response.data.resultMessage ||
            ''}`
        )
      );
    }
    if (response.data.errorMessage) {
      return Promise.reject(new Error(response.data.errorMessage));
    }

    const { accesstoken } = response.headers;
    if (accesstoken) store.commit('Options/setUserInfo', { accesstoken });

    return response;
  },
  error => {
    if (axios.isCancel(error)) {
      return Promise.reject(error);
    }

    // if (error.config.loadingKey) hideLoading(error.config.loadingKey);

    if (error.response && error.response.data) {
      const message = error.response.data.resultMessage;
      // const message = '시스템 오류입니다. 잠시 후 다시 시도하세요.';

      console.log(message);

      // if (error.response.status === 401) {
      //   MessageBox.confirm(message, 'System Alert', {
      //     confirmButtonText: 'Re-Login',
      //     cancelButtonText: 'Cancel',
      //     type: 'warning'
      //   }).then(() => {
      //     store.commit('Options/clearUserInfo');
      //     console.log('### logout ###');
      //     router.replace('/login');
      //   });
      // } else {
      //   Message({
      //     message: message,
      //     type: 'error',
      //     duration: 5 * 1000
      //   });
      // }

      // if (error.response.status === 401) {
      //   MessageBox.confirm('Expired Session Token. Please, Re-Login', 'System Alert', {
      //     confirmButtonText: 'Re-Login',
      //     cancelButtonText: 'Cancel',
      //     type: 'warning'
      //   }).then(() => {
      //     store.commit('Options/clearUserInfo');
      //     console.log('### logout ###');
      //     router.replace('/login');
      //   });
      // } else {
      //   Message({
      //     message: message,
      //     type: 'error',
      //     duration: 5 * 1000
      //   });
      // }

      return Promise.reject(error);
    }
    return Promise.reject(
      new Error('시스템에러입니다. 관리자에게 문의해 주세요.')
    );
  }
);
