<template>
  <transition name="fade">
    <div class="modal">
      <spinner
        class="spinner"
        :line-size="10"
        :size="100"
        message="Loading..."
        text-fg-color="#fff"
        :line-fg-color="color"
      />
    </div>
  </transition>
</template>

<script>
import Spinner from 'vue-simple-spinner';

export default {
  components: {
    Spinner
  },

  data() {
    return {
      beforeFocusedElement: null
    };
  },

  computed: {
    color() {
      return this.userInfo.compType === 'K' ? '#d3243c' : '#4492d2';
    }
  },

  created() {
    this.beforeFocusedElement = document.activeElement;
  },

  mounted() {
    document.activeElement.blur();
  },

  beforeDestroy() {
    this.beforeFocusedElement.focus();
  }
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s;
}
.fade-enter {
  opacity: 0;
}
.fade-leave-to {
  opacity: 0;
}

.modal {
  display: block;
  position: fixed;
  z-index: 9999999;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.4);
}
.spinner {
  position: absolute;
  left: 50%;
  top: 50%;
  margin-top: -50px;
  margin-left: -50px;
}
</style>
