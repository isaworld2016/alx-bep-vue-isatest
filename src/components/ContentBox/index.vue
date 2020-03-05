<template>
  <div :style="boxSize">
    <button @click="clickEvent">{{ contBoxBtn1 }}</button>
    <tab-modal />
  </div>
</template>

<script>
import TabModal from '../modals/TabModal';

export default {
  components: {
    TabModal
  },
  props: {
    contBoxTitle: {
      type: String,
      default: ''
    },
    contBoxBtn1: {
      type: String,
      default: ''
    },
    contBoxBtn2: {
      type: String,
      default: ''
    },
    contBoxBtn3: {
      type: String,
      default: ''
    },
    contBoxWidth: {
      type: Number,
      default: null
    },
    contBoxHeight: {
      type: Number,
      default: null
    }
  },
  computed: {
    boxSize() {
      return `width:${this.contBoxWidth}px; height:${this.contBoxHeight}px;`;
    }
  },
  methods: {
    clickEvent() {
      this.$modal.show('tab-modal');
    }
  }
};
</script>

<style></style>
