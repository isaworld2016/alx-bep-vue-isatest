<template>
  <div>
    <div>{{ copyright }}</div>
    <div>{{ privacy }}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      copyright: 'copyright@2020 Alliex. All rights reserved.',
      privacy: 'Privacy Policy'
    };
  }
};
</script>

<style scoped></style>
