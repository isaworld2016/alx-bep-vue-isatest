<template>
  <div>
    <push left disableOutsideClick disableEsc>
      <a id="firstMenu" href="/sysAdmin" @click.prevent="addTabs">
        <span>
          {{ menuNames[0].name }}
          <i class="fas fa-plus plusIcon"></i>
        </span>
      </a>

      <a id="secondMenu" href="/infoAdmin" @click.prevent="addTabs">
        <span>{{ menuNames[1].name }}</span>
        <i class="fas fa-plus plusIcon"></i>
      </a>
    </push>
    <!-- <Menu />  상단에 메뉴바가 필요하면 컴포넌트로 넣음-->
    <main id="page-wrap">
      <base-tab :baseTabTitles="baseTabTitles" />
    </main>
  </div>
</template>

<script>
import { Push } from 'vue-burger-menu';
import BaseTab from '../Tabs/BaseTab';

export default {
  components: {
    Push,
    BaseTab
  },
  data() {
    return {
      menuNames: [
        { index: 1, name: '사용자정보' },
        { index: 2, name: '관리자메뉴' },
        { index: 3, name: '이용내역' }
      ],
      clickMenu: '',
      baseTabTitles: []
    };
  },
  methods: {
    addTabs(e) {
      // console.log(e);
      // console.log(e.target.textContent);
      this.clickMenu = e.target.textContent;
      console.log(this.clickMenu);

      this.baseTabTitles.push(this.clickMenu);
      console.log(this.baseTabTitles);

      this.clickMenu = '';
    }
  }
};
</script>

<style></style>
