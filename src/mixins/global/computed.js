import { mapState, mapGetters } from 'vuex';

export default {
  ...mapGetters('CommonCode', [
    'getCommonCodeList',
    'getCommonBizCodeList',
    'getCommonCodeByCodeId',
    'getCommonCodeGroupById',
    'getMenuList',
    'getMenuTree'
  ]),
  ...mapState('CommonCode', {
    commonCodeGroupList: state => state.codeGroupList
  }),
  ...mapGetters('Options', ['isLogin', 'loginToken', 'userInfo']),
  ...mapState('Options', {
    msgLangCd: state => state.msgLangCd,
    company: 'cms'
  }),
  ...mapGetters('Loading', ['isGlobalLoading']),
  ...mapGetters('tagsView', ['visitedViews', 'cachedViews'])
};
