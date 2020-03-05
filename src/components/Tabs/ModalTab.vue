<template>
  <div>
    <vue-tiny-tabs
      id="popupTabs"
      :anchor="false"
      :hideTitle="true"
      @on-close="onClose"
      @on-before="onBefore"
      @on-after="onAfter"
    >
      <div class="section" id="tab1">
        <h3 class="title">{{ tabTitle1 }}</h3>
      </div>

      <div class="section" id="tab2">
        <h3 class="title">{{ tabTitle2 }}</h3>
      </div>

      <div class="section" id="tab3" v-if="tabTitle3">
        <h3 class="title">{{ tabTitle3 }}</h3>
      </div>

      <div class="section" id="tab3" v-if="tabTitle4">
        <h3 class="title">{{ tabTitle4 }}</h3>
      </div>
    </vue-tiny-tabs>
  </div>
</template>

<script>
import VueTinyTabs from 'vue-tiny-tabs';
// import ContentBox from '../ContentBox';

export default {
  name: 'BaseTab',
  components: {
    VueTinyTabs
    // ContentBox,
  },
  props: {
    // modal 안에 있는 tab title
    tabTitle1: {
      type: String,
      default: ''
    },
    tabTitle2: {
      type: String,
      default: ''
    },
    tabTitle3: {
      type: String,
      default: ''
    },
    tabTitle4: {
      type: String,
      default: ''
    },
    // BTN
    btnName1: {
      type: String,
      default: ''
    },
    btnName2: {
      type: String,
      default: ''
    },
    btnName3: {
      type: String,
      default: ''
    }
  },
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
