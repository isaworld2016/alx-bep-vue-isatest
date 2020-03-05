export default {
  state: {
    codeList: [],
    bizCodeList: [],
    codeGroupList: [],
    menuList: [],
    menuTree: {}
  },
  namespaced: true,
  mutations: {
    setCommonCodeList(state, codeList) {
      state.codeList = [...codeList];
    },
    setCommonBizCodeList(state, bizCodeList) {
      state.bizCodeList = [...bizCodeList];
    },
    setCommonCodeGroupList(state, codeGroupList) {
      state.codeGroupList = [...codeGroupList];
    },
    setMenuList(state, menuList) {
      state.menuList = [...menuList];
    },
    setMenuTree(state, menuTree) {
      state.menuTree = menuTree;
    }
  },
  getters: {
    getCommonCodeList: state => codeGrpId => {
      if (codeGrpId) {
        return state.codeList.filter(item => item.codeGrpId === codeGrpId);
      }
      return state.codeList;
    },
    getCommonBizCodeList: state => bizCodeGrpId => {
      if (bizCodeGrpId) {
        return state.bizCodeList.filter(
          item => item.codeGrpId === bizCodeGrpId
        );
      }
      return state.bizCodeList;
    },
    getCommonCodeByCodeId: state => codeId =>
      state.codeList.find(item => item.codeId === codeId),
    getCommonCodeGroupById: state => groupId =>
      state.codeGroupList.find(item => item.codeGrpId === groupId),
    getMenuList: state => () => state.menuList,
    getMenuTree: state => () => state.menuTree
  }
};
