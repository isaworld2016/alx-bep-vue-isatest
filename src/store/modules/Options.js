const storage = window.sessionStorage;

const defaultOptions = {
  msgLangCd: storage.getItem('msgLangCd') || 'ko_KR'
};

const defaultUserInfo = {
  accesstoken: storage.getItem('accesstoken'),
  userId: null,
  userName: null,
  msgLangCd: null,
  deptCd: null,
  classCd: null,
  menuAuthority: null,
  authorities: [],
  nonSuitableYn: 'N'
};

const setItem = (state, key, value) => {
  state[key] = value;
  if (key === 'accesstoken') storage.setItem(key, value);
};

const removeItem = (state, key) => {
  state[key] = null;
  storage.removeItem(key);
};

export default {
  state: Object.assign({}, defaultOptions, defaultUserInfo),

  namespaced: true,

  mutations: {
    setUserInfo(state, userInfo) {
      Object.keys(userInfo).forEach(key => {
        const value = userInfo[key];
        if (value) {
          setItem(state, key, userInfo[key]);
        } else {
          removeItem(state, key);
        }
      });
    },

    clearUserInfo(state) {
      Object.keys(defaultUserInfo).forEach(key => {
        removeItem(state, key);
      });
    }
  },
  getters: {
    isLogin: state => {
      const { accesstoken, userName } = state;
      return Boolean(
        /^[a-z0-9-_]{1,}\.[a-z0-9-_]{1,}\.[a-z0-9-_]{1,}$/i.test(accesstoken) &&
          userName
      );
    },

    loginToken: state => state.accesstoken,

    userInfo: state => {
      const userInfo = {};

      Object.keys(defaultUserInfo).forEach(key => {
        userInfo[key] = state[key];
      });

      return userInfo;
    },

    all: state => state
  }
};
