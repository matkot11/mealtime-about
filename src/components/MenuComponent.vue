<template>
  <button @click="handleMenuButton" class="menu">
    <span class="menu__line menu__line-top"></span>
    <span class="menu__line menu__line-middle"></span>
    <span class="menu__line menu__line-bottom"></span>
  </button>
</template>

<script>
import { watchEffect } from "vue";
import { handleMenuAnimation } from "@/utils/MenuAnimation";

export default {
  name: "MenuComponent",
  props: {
    menuButton: {
      type: Function,
      required: true,
    },
    isNavigationOpen: {
      type: Boolean,
      required: true,
    },
  },
  setup(props) {
    const handleMenuButton = () => {
      props.menuButton();
      handleMenuAnimation(props.isNavigationOpen);
    };

    watchEffect(() => {
      handleMenuAnimation(props.isNavigationOpen);
    });

    return {
      handleMenuButton,
    };
  },
};
</script>

<style lang="scss" scoped>
.menu {
  width: 2.5rem;
  height: 1.8rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  z-index: 999;

  &__line {
    border-bottom: 2.5px solid black;
    height: 1px;
    width: 2.8rem;
  }
}
</style>
