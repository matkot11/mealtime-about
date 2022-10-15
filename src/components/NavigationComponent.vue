<template>
  <div class="navigation">
    <RouterLink class="navigation__link" @click="closeNavigation" to="/"
      >HOME</RouterLink
    >
    <RouterLink
      class="navigation__link"
      @click="closeNavigation"
      to="/user-stories"
      >USER STORIES</RouterLink
    >
    <RouterLink class="navigation__link" @click="closeNavigation" to="/sketches"
      >SKETCHES</RouterLink
    >
    <RouterLink class="navigation__link" @click="closeNavigation" to="/critique"
      >CRITIQUE</RouterLink
    >
    <RouterLink
      class="navigation__link"
      @click="closeNavigation"
      to="/tech-stack"
      >TECH STACK</RouterLink
    >
  </div>
</template>

<script>
export default {
  name: "NavigationComponent",
  props: {
    closeNavigation: {
      type: Function,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.navigation {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 100;
  background-color: #ffffff;

  &__link {
    margin: 1.5rem;
    font-size: 2.2rem;
    font-weight: 600;
  }

  .router-link-active {
    color: $orange-color;
  }
}
</style>
