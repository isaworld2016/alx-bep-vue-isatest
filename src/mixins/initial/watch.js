export default {
  isLogin() {
    if (this.isLogin) {
      this.fetchCommonCode();

      if (this.isCommonCodeReady) {
        this.goFirstPage();
      }
    }
  },

  company() {
    this.setCompanyClass();
  },

  msgLangCd() {
    this.updateLang();
  }
};
