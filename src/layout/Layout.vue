<template>
  <div :class="layoutClasses">
    <div>
      <slot v-if="fullBar" name="toolbar" />
      <slot v-else name="left-drawer" />
    </div>
    <div :class="middleClasses" class="vue-ads-flex-grow vue-ads-flex">
      <div>
        <slot v-if="fullBar" name="left-drawer" />
        <slot v-else name="toolbar" />
      </div>
      <div class="vue-ads-flex-grow vue-ads-relative">
        <slot />
      </div>
      <div>
        <slot v-if="fullBar" name="right-drawer" />
        <slot v-else name="footer" />
      </div>
    </div>
    <div>
      <slot v-if="fullBar" name="footer" />
      <slot v-else name="right-drawer" />
    </div>
  </div>
</template>

<script>
// import '../assets/css/tailwind.css';
import './../../node_modules/@fortawesome/fontawesome-free/css/all.css';

export default {
  name: 'VueAdsLayout',
  props: {
    fullBar: {
      type: Boolean,
      default: true
    },
    fullScreen: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      toolbar: {
        fixed: null,
        height: 0
      },
      footer: {
        fixed: null,
        height: 0
      },
      'left-drawer': {
        width: 0
      },
      'right-drawer': {
        width: 0
      }
    };
  },
  computed: {
    layoutClasses() {
      return {
        'vue-ads-flex-col': this.fullBar,
        'vue-ads-flex-row': !this.fullBar,
        'vue-ads-w-full': true,
        'vue-ads-max-w-screen': this.fullScreen,
        'vue-ads-min-h-screen': this.fullScreen,
        'vue-ads-overflow-x-hidden': this.fullScreen,
        'vue-ads-flex': true
      };
    },
    middleClasses() {
      return {
        'vue-ads-flex-row': this.fullBar,
        'vue-ads-flex-col': !this.fullBar
      };
    }
  }
  // methods: {
  //     updateChildData (slot, data) {
  //         this[slot] = data;
  //     },
  // },
};
</script>

<style></style>
