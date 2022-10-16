<template>
  <button class="button">{{ text }}</button>
</template>

<script>
export default {
  name: "ButtonComponent",
  props: {
    text: {
      type: String,
      required: true,
    },
    backgroundColor: {
      type: String,
    },
  },
};
</script>

<style lang="scss" scoped>
.button {
  padding: 0.8rem 2.5rem;
  background-color: v-bind(backgroundColor);
  font-size: 1.8rem;
  font-weight: 600;
  border-radius: 5px;
  border: 2px solid $orange-color;
}
</style>
