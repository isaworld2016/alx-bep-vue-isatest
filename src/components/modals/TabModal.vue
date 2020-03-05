<template>
  <div>
    <modal
      name="tab-modal"
      :width="800"
      :height="700"
      :clickToClose="false"
      :resizable="false"
      :maxWidth="1274"
      :minWidth="800"
      :maxHeight="700"
      :minHeight="700"
    >
      <div>
        <span>
          <i class="fas fa-times" style="color:black;" @click="closeModal"></i>
        </span>
        <div>{{ modalTitle }}</div>
      </div>
      
      <modal-tab
        :tab-title1="tabTitle1"
        :tab-title2="tabTitle2"
        :btn-Name1="btnName1"
      />
      <div>
        <button>{{ btmBtnName }}</button>
      </div>
    </modal>
  </div>
</template>

<script>
import ModalTab from '../Tabs/ModalTab';

export default {
  components: {
    ModalTab
  },
  props: {
    //to Tabmodal
    modalTitle: {
      type: String,
      default: ''
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
    },
    btmBtnName: {
      type: String,
      default: ''
    },
    // to ModalTab
    tabTitle1: {
      type: String,
      default: 'TAB TITLE1'
    },
    tabTitle2: {
      type: String,
      default: 'TAB TITLE2'
    },
    tabTitle3: {
      type: String,
      default: ''
    },
    tabTitle4: {
      type: String,
      default: ''
    }
  },
  methods: {
    closeModal() {
      this.$modal.hide('tab-modal');
    }
  }
};
</script>

<style></style>
