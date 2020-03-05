export default function() {
  if (this.isLogin) {
    this.fetchCommonCode();

    if (this.isCommonCodeReady) {
      this.goFirstPage();
    }
  }
  this.setCompanyClass();
  this.login();
}
