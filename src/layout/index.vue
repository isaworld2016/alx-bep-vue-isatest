<template>
  <div id="app">
    <vue-ads-layout :full-bar="true">
      <vue-ads-bar slot="toolbar" :fixed="true">
        <div slot="first">
          <img src="../assets/alliexLogo.png" width="150px;" />
        </div>
      </vue-ads-bar>

      <vue-ads-bar slot="footer" :fixed="true" :footer="true">
        <Footer />
      </vue-ads-bar>
      <side-bar />
    </vue-ads-layout>
  </div>
</template>

<script>
import VueAdsLayout from './Layout';
import VueAdsBar from './VueAdsBar';

import SideBar from '../components/SideBar';
import Footer from '../components/Footer';

export default {
  components: {
    VueAdsLayout,
    VueAdsBar,

    SideBar,
    Footer
  },
  data() {
    return {
      firstMenu: '시스템관리',
      secondMenu: '정보관리',
      isOpen: true
    };
  },
  mounted() {
    this.isOpen = false;
  },
  methods: {
    changeIsOpen() {
      this.isOpen = true;
    }
  }
};
</script>

<style>
h1 {
  font-weight: 800;
  font-size: 3.75em;
}

a {
  padding: 1em;
  text-transform: uppercase;
  transition: background 0.3s, box-shadow 0.3s;
  box-shadow: inset 0 -1px rgba(0, 0, 0, 0.2);
  /* span {
    letter-spacing: 1px;
    font-weight: 400;
  }
  :hover
  :focus {
    background: rgba(0, 0, 0, 0.2);
    box-shadow: inset 0 -1px rgba(0, 0, 0, 0);
    color: #b8b7ad;
  } */
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.plusIcon {
  color: white;
  margin-left: 100px;
  margin-top: 2px;
}
</style>
