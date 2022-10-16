<template>
  <h2 class="header">{{ text }}</h2>
</template>

<script>
export default {
  name: "HeaderComponent",
  props: {
    text: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.header {
  margin: 1rem 0;
  font-size: 2.5rem;
  font-weight: 600;
  color: $orange-color;
}
</style>
