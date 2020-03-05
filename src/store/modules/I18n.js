export default {
  state: {
    messageList: []
  },
  namespaced: true,
  mutations: {
    setMessageList(state, messageList) {
      state.messageList = [...messageList];
    }
  },
  getters: {
    getMessageById: state => messageId =>
      state.messageList.find(item => item.msgId === messageId),
    findMessage: state => message =>
      state.messageList.filter(item => {
        if ((item.msgKoText || '').indexOf(message) > -1) return true;
        if ((item.msgEnText || '').indexOf(message) > -1) return true;
        return false;
      })
  }
};
