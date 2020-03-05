<template>
  <div>
    <div>
      <h1>{{ welMsgTitle }}</h1>
    </div>
    <div>
      <h4>{{ welMsgContent }}</h4>
    </div>
    <div>
      <img src="@/assets/alliexLogo.png" width="150px;" />
    </div>
    <input type="text" v-model="loginForm.username" placeholder="ID" @keyup.enter="handleLogin" />
    <input
      type="password"
      v-model="loginForm.password"
      placeholder="Password"
      @keyup.enter="handleLogin"
    />
    <div>
      <button @click="handleLogin">{{ loginBtn }}</button>
    </div>
    <div>
      <button @click="showThisModal">{{ privPoli }}</button>
    </div>
    <priv-poli-modal />
  </div>
</template>

<script>
import PrivPoliModal from "@/components/modals/PrivPoliModal";

export default {
  name: "Login",
  components: {
    PrivPoliModal
  },
  data() {
    return {
      loginForm: {
        username: "",
        password: ""
      },
      loginBtn: "LOGIN",
      welMsgTitle: "WELCOME",
      welMsgContent: "to the Alliex Management System",
      privPoli: "개인정보처리방침",

      isPasswdChange: false
    };
  },
  mounted() {},
  methods: {
    // handleLogin() {
    //   this.$http
    //     .post(
    //       '/LoginAct.do',
    //       {
    //         userid: this.loginForm.username,
    //         passwd: this.loginForm.password
    //       },
    //       {
    //         showLoading: true
    //       }
    //     )
    //     .then(res => {
    //       const { accesstoken } = res.headers;
    //       /* 쿠키를 생성한다. */
    //       this.$cookie.set('spaToken', accesstoken, { expires: '60s' });
    //       if (res.data.resultData.initPassYn === 'Y') {
    //         // 비밀번호 변경 Popup
    //         this.isPasswdChange = true;
    //       } else {
    //         window.location.href = '/layout';
    //       }
    //     });
    // },
    showThisModal() {
      this.$modal.show("priv-poli-modal");
    }
  }
};
</script>

<style lang="scss" scoped></style>
