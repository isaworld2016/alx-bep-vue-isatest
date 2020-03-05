<template>
  <div id="app">
    <loading v-if="isCommonCodeFetching" />
    <template v-else>
      <!-- <component :is="`${layout}-layout`"> -->
      <router-view />
      <!-- </component> -->
    </template>
  </div>
</template>

<script>
import initialMixin from '@/mixins/initial';

export default {
  name: 'App',
  mixins: [initialMixin],
  computed: {
    // layout() {
    //   if (!this.$route.meta.layout) return 'empty';
    //   return /^(admin)$/.test(this.$route.meta.layout)
    //     ? 'common'
    //     : this.$route.meta.layout;
    // },
    // classes() {
    //   return [this.company, `${this.$route.meta.layout}-layout`];
    // }
  }
};
</script>

<style lang="scss"></style>
