<template>
  <div>
    <vue-tiny-tabs
      id="baseTabs"
      :anchor="true"
      :closable="true"
      :hideTitle="true"
      @on-close="onClose"
      @on-before="onBefore"
      @on-after="onAfter"
    >
      <div class="section" id="home">
        <h3 class="title"><i class="fas fa-home"></i></h3>
        <button @click="ppModal">priv poli modal</button>
        <button @click="showMeTabModal">tab popup</button>
        <button @click="commonModal">common modal</button>
        <button @click="infoModal">info modal</button>
      </div>

      <div class="section" id="tab11">
        <h3 class="title" v-if="baseTabTitles">{{ baseTabTitles[0] }}</h3>
      </div>

      <div class="section" id="tab22">
        <h3 class="title" v-if="baseTabTitles">{{ baseTabTitles[1] }}</h3>
      </div>

      <div class="section" id="tab33">
        <h3 class="title" v-if="baseTabTitles">{{ baseTabTitles[2] }}</h3>
      </div>
    </vue-tiny-tabs>
    <!-- 버튼 test-->
    <PrivPoliModal />
    <TabModal :modal-title="modalTitle" :btmBtnName="btmBtnName" />
    <CommonModal />
    <InformModal />
  </div>
</template>

<script>
import VueTinyTabs from 'vue-tiny-tabs';

import PrivPoliModal from '../modals/PrivPoliModal';
import TabModal from '../modals/TabModal';
import CommonModal from '../modals/CommonModal';
import InformModal from '../modals/InformModal';

export default {
  name: 'BaseTab',
  components: {
    VueTinyTabs,
    PrivPoliModal,
    TabModal,
    CommonModal,
    InformModal
  },
  data(){
    return {
      modalTitle: 'TITLE',
      btmBtnName: 'BTN'
    }
  },
  props: {
    baseTabTitles: {
      type: Array,
      default: () => []
    }
    // baseTabTitle1: {
    //   type: String,
    //   default: ''
    // },
    // baseTabTitle2: {
    //   type: String,
    //   default: ''
    // },
    // baseTabTitle3: {
    //   type: String,
    //   default: ''
    // }
  },
  // mounted() {
  //   console.log(this.baseTabTitles[0]); //함수를 넣어야 할 것 같은데
  // },
  methods: {
    onClose(id) {
      console.log(
        // 'Callback function that gets evaluated while closing the tab',
        id
      );
    },
    onBefore(id, tab) {
      console.log(
        // 'Callback function that gets evaluated before a tab is activated',
        id,
        tab
      );
    },
    onAfter(id, tab) {
      console.log(
        // 'Callback function that gets evaluated after a tab is activated',
        id,
        tab
      );
    },
    ppModal() {
      this.$modal.show('priv-poli-modal');
    },
    showMeTabModal() {
      this.$modal.show('tab-modal');
    },
    commonModal() {
      this.$modal.show('common-modal');
    },
    infoModal() {
      this.$modal.show('inform-modal');
    }
  }
};
</script>

<style>
.tinytabs .tabs {
  margin-left: 15px;
  display: flex;
  flex-flow: row wrap;
}
.tinytabs .tabs .tab .close {
  padding-left: 5px;
}
.tinytabs .tabs .tab {
  margin: 0 3px 0 0;
  background: #e1e1e1;
  display: block;
  padding: 6px 15px;
  text-decoration: none;
  color: #666;
  font-weight: bold;
  border-radius: 3px 3px 0 0;
}
.tinytabs .section {
  background: #f1f1f1;
  overflow: hidden;
  padding: 15px;
  clear: both;
  border-radius: 3px;
}
.tinytabs .tab.sel {
  background: #f1f1f1;
  color: #333;
  text-shadow: none;
}
</style>
