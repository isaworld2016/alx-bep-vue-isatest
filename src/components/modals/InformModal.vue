<template>
  <div>
    <modal
      name="inform-modal"
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
      <p>{{ infoMsg }}</p>
      <div>
        <button>{{ btnName1 }}</button>
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
      default: 300
    },
    height: {
      type: Number,
      default: 160
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
      default: '알림'
    },
    infoMsg: {
      type: String,
      default: '인포 모달의 메시지입니다.'
    },
    btnName1: {
      type: String,
      default: '확인'
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
      this.$modal.hide('inform-modal');
    }
  }
};
</script>

<style></style>
