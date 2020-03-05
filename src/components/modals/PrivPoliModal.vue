<template>
  <div>
    <modal
      name="priv-poli-modal"
      :width="width"
      :height="height"
      :click-to-close="clickToClose"
    >
      <div>
        <span>
          <i class="fas fa-times" style="color:black;" @click="closeModal"></i>
        </span>
        <div>{{ modalTitle }}</div>
      </div>

      {{ adaptDate }} :
      <select v-model="selected">
        <option disabled value="">{{ selectMsg }}</option>
        <option
          v-for="selectList in selectLists"
          :key="selectList.index"
          :value="selectList"
        >
          {{ selectList.adaptDate }}
        </option>
      </select>
      <p><span v-html="selected.document"></span></p>
      <div>
        <h4>
          {{ anounDate }}
          {{ selected.anounDate }}
        </h4>
      </div>
      <div>
        <h4>
          {{ adaptDate }}
          {{ selected.adaptDate }}
        </h4>
      </div>
    <PrivPoliContent />
    </modal>
  </div>
</template>

<script>
import PrivPoliContent from '../PrivPoliContent';

export default {
  components: {
    PrivPoliContent
  },
  data() {
    return {
      modalTitle: '개인정보처리방침',
      anounDate: '공고일자',
      adaptDate: '시행일자',
      selectMsg: '시행일자 선택',

      width: 800,
      height: 700,
      clickToClose: false,

      selectLists: [
        {
          index: 1,
          anounDate: '2020년 03월 03일',
          adaptDate: '2021년 03월 02일',
          document:
            '<개인정보보호 종합포털> 개인정보 처리방침 개인정보보호 종합포털>이 취급하는 모든 개인정보는 관련 법령에 근거하여 수집 · 보유 및 처리되고 있습니다. <br> 「개인정보보호법」은 이러한 개인정보의 취급에 대한 일반적 규범을 제시하고 있으며, <개인정보보호 종합포털>은 이러한 법령의 규정에 따라 수집 · 보유 및 처리하는 개인정보를 공공업무의 적절한 수행과 이용자의 권익을 보호하기 위해 적법하고 적정하게 취급할 것입니다. <br> 또한, <개인정보보호 종합포털>은 관련 법령에서 규정한 바에 따라 보유하고 있는 개인정보에 대한 열람, 정정·삭제, 처리정지 요구 등 이용자의 권익을 존중하며, 이용자는 이러한 법령상 권익의 침해 등에 대하여 행정심판법에서 정하는 바에 따라 행정심판을 청구할 수 있습니다. <br> <개인정보보호 종합포털>은 개인정보보호법 제 30조에 따라 정보주체의 개인정보 보호 및 권익을 보호하고 개인정보와 관련한 이용자의 고충을 원활하게 처리할 수 있도록 다음과 같은 개인정보 처리방침을 수립 · 공개하고 있습니다.'
        },
        {
          index: 2,
          anounDate: '2019년 03월 03일',
          adaptDate: '2020년 03월 02일',
          document:
            '<개인정보보호 종합포털> 개인정보 처리방침 개인정보보호 종합포털>이 취급하는 모든 개인정보는 관련 법령에 근거하여 수집 · 보유 및 처리되고 있습니다. <br> 「개인정보보호법」은 이러한 개인정보의 취급에 대한 일반적 규범을 제시하고 있으며, <개인정보보호 종합포털>은 이러한 법령의 규정에 따라 수집 · 보유 및 처리하는 개인정보를 공공업무의 적절한 수행과 이용자의 권익을 보호하기 위해 적법하고 적정하게 취급할 것입니다. <br> 또한, <개인정보보호 종합포털>은 관련 법령에서 규정한 바에 따라 보유하고 있는 개인정보에 대한 열람, 정정·삭제, 처리정지 요구 등 이용자의 권익을 존중하며, 이용자는 이러한 법령상 권익의 침해 등에 대하여 행정심판법에서 정하는 바에 따라 행정심판을 청구할 수 있습니다. <br> <개인정보보호 종합포털>은 개인정보보호법 제 30조에 따라 정보주체의 개인정보 보호 및 권익을 보호하고 개인정보와 관련한 이용자의 고충을 원활하게 처리할 수 있도록 다음과 같은 개인정보 처리방침을 수립 · 공개하고 있습니다.'
        },
        {
          index: 3,
          anounDate: '2018년 03월 03일',
          adaptDate: '2019년 03월 02일',
          document:
            '<개인정보보호 종합포털> 개인정보 처리방침 개인정보보호 종합포털>이 취급하는 모든 개인정보는 관련 법령에 근거하여 수집 · 보유 및 처리되고 있습니다. <br> 「개인정보보호법」은 이러한 개인정보의 취급에 대한 일반적 규범을 제시하고 있으며, <개인정보보호 종합포털>은 이러한 법령의 규정에 따라 수집 · 보유 및 처리하는 개인정보를 공공업무의 적절한 수행과 이용자의 권익을 보호하기 위해 적법하고 적정하게 취급할 것입니다. <br> 또한, <개인정보보호 종합포털>은 관련 법령에서 규정한 바에 따라 보유하고 있는 개인정보에 대한 열람, 정정·삭제, 처리정지 요구 등 이용자의 권익을 존중하며, 이용자는 이러한 법령상 권익의 침해 등에 대하여 행정심판법에서 정하는 바에 따라 행정심판을 청구할 수 있습니다. <br> <개인정보보호 종합포털>은 개인정보보호법 제 30조에 따라 정보주체의 개인정보 보호 및 권익을 보호하고 개인정보와 관련한 이용자의 고충을 원활하게 처리할 수 있도록 다음과 같은 개인정보 처리방침을 수립 · 공개하고 있습니다.'
        }
      ],
      selected: []
    };
  },
  methods: {
    closeModal() {
      this.$modal.hide('priv-poli-modal');
    }
  }
};
</script>

<style></style>
