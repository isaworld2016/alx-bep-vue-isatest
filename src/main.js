import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import VueCookie from 'vue-cookie';
Vue.use(VueCookie);

import 'normalize.css/normalize.css';

import './config/http';

import globalMixin from '@/mixins/global';
Vue.mixin(globalMixin);

import VModal from 'vue-js-modal';
Vue.use(VModal);

Vue.config.productionTip = process.env.NODE_ENV === 'development';

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
