<template>
  <RouterLink to="/" class="logo__text"
    ><span class="logo__text-orange">M</span>EALTIME</RouterLink
  >
</template>

<script>
export default {
  name: "LogoComponent",
};
</script>

<style lang="scss" scoped>
.logo__text {
  font-family: "Nanum Brush Script", cursive;
  font-size: 3rem;

  &-orange {
    color: $orange-color;
  }
}
</style>
