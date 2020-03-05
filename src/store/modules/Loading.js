export default {
  state: {
    list: []
  },
  namespaced: true,
  getters: {
    isGlobalLoading: state => !!state.list.length
  },
  mutations: {
    pushLoad(state, payload) {
      state.list.push(payload);
    },
    removeLoad(state, id) {
      state.list = state.list.filter(item => item !== id);
    }
  }
};
