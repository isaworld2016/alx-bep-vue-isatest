<template>
  <div>
    <modal
      name="common-modal"
      :scrollable="scrollable"
      :click-to-close="clickToClose"
      :overlay-transition="overlayTransition"
      :width="width"
      :height="height"
    >
      <div>
        <span>
          <i class="fas fa-times" style="color:black;" @click="closeModal"></i>
        </span>
        <div>{{ modalTitle }}</div>
      </div>
      <!--컨텐츠에 해당하는 컴포넌트 import-->
      <div>
        <button v-if="btnName1">{{ btnName1 }}</button>
      </div>
    </modal>
  </div>
</template>

<script>
export default {
  props: {
    // Number type
    width: {
      type: Number,
      default: 800 // 그리드 있을 때 1274
    },
    height: {
      type: Number,
      default: 400
    },
    // Boolean type
    scrollable: {
      type: Boolean,
      default: false
    },
    clickToClose: {
      type: Boolean,
      default: false
    },
    // String type
    overlayTransition: {
      type: String,
      default: 'overlay-fade'
    },
    modalTitle: {
      type: String,
      default: 'COMMON MODAL TITLE'
    },
    btnName1: {
      type: String,
      default: 'BTN'
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
    closeModal() {
      this.$modal.hide('common-modal');
    }
  }
};
</script>

<style></style>
