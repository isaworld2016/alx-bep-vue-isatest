import Vue from 'vue';
import Vuex from 'vuex';

import Options from './modules/Options';
import CommonCode from './modules/CommonCode';
import I18n from './modules/I18n';
import Loading from './modules/Loading';

import tagsView from './modules/tagsView';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    Options,
    CommonCode,
    I18n,
    Loading,
    tagsView
  }
});
