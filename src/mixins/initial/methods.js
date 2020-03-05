import axios from 'axios';
import store from '@/store';
import flatten from 'tree-flatten';

export default {
  fetchCommonCode() {
    this.isCommonCodeFetching = true;
    this.$http
      .all([
        this.$http.post('/api/com/getCodeList.do', {}).then(res => {
          this.$store.commit(
            'CommonCode/setCommonCodeList',
            res.data.resultList
          );
        }),
        this.$http.post('/api/com/getCodeGroupList.do', {}).then(res => {
          this.$store.commit(
            'CommonCode/setCommonCodeGroupList',
            res.data.resultList
          );
        }),
        this.$http.post('/api/com/getUserMenuTree.do', {}).then(res => {
          const menuTree = res.data.resultData.children;
          const menuList = flatten(res.data.resultData, 'children');

          console.log('menuTree', menuTree);
          console.log('menuList', menuList);

          this.$store.commit('CommonCode/setMenuTree', menuTree);
          this.$store.commit('CommonCode/setMenuList', menuList);
        }),
        this.$http
          .post('/api/com/getMessageList.do', {
            currPage: -1
          })
          .then(res => {
            this.$store.commit('I18n/setMessageList', res.data.resultList);
          })
      ])
      .then(
        this.$http.spread(() => {
          this.updateLang();
          this.isCommonCodeReady = true;

          this.$router.replace('/layout');
        })
      )
      .catch(() => (this.isCommonCodeFail = true))
      .finally(() => {
        this.isCommonCodeFetching = false;
      });
  },
  setCompanyClass() {
    document.body.classList.remove('cms');
    document.body.classList.add(this.company);
  },

  /**
   * 쿠키를 확인해서 토큰 정보를 갱신하고 유저 정보를 스토어에 저장
   */
  login() {
    if (this.isLogin) return;

    const spaToken = this.loginToken || this.$cookie.get('spaToken');
    this.$cookie.delete('spaToken');

    if (spaToken) {
      // 토큰갱신(api 콜) & 세션스토리지 저장
      axios
        .post('/api/com/getTokenInfo.do', null, {
          headers: {
            accesstoken: spaToken
          },
          param: {}
        })
        .then(res => {
          const { accesstoken } = res.headers;
          const userInfo = res.data.resultData;
          userInfo.accesstoken = accesstoken;

          store.commit('Options/setUserInfo', userInfo);
        });

      return;
    }

    if (this.$router.currentRoute.fullPath === '/login') return;

    console.log('### 로그인 정보가 없습니다. ###');

    this.logout();
  },

  goFirstPage() {
    // const userInfo = this.$store.getters['Options/userInfo'];
    // const authorities = userInfo.authorities[0];
    // const { pathname } = window.location;

    let menuList = this.$store.getters['CommonCode/getMenuList']();
    menuList = menuList.filter(item => item.lvl === 2);
    console.log(JSON.stringify(menuList[0]));
    this.$router
      .replace({
        path: menuList[0].path,
        name: menuList[0].name,
        params: {
          parentId: menuList[0].upId,
          menuId: menuList[0].Id
        }
      })
      .catch(err => err);
  },

  updateLang() {
    switch (this.msgLangCd) {
      case 'ko_KR':
        document.documentElement.lang = 'ko';
        break;
      default:
        document.documentElement.lang = 'en';
    }
  }
};
