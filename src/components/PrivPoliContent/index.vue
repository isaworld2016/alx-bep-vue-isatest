<template>
  <div>
    <common-modal
      :width="width"
      :height="height"
      :scrollable="scrollable"
      :click-to-close="clickToClose"
      :overlay-transition="overlayTransition"
      :modal-title="modalTitle"
    >
    여기는 개인정보 컨텐츠
    </common-modal>
  </div>
</template>

<script>
import CommonModal from '../modals/CommonModal';

export default {
  components: {
    CommonModal
  },
  data() {
    return {
      width: 800,
      height: 700,
      scrollable: false,
      clickToClose: false,
      overlayTransition: 'overlay-fade',
      modalTitle: '개인정보처리방침'
    };
  }
};
</script>

<style></style>
