<template>
  <div class="wrapper">
    <HeaderComponent text="Tech stack" />
    <h4 class="wrapper__heading">Language:</h4>
    <p class="wrapper__paragraph">JavaScript</p>
    <h4 class="wrapper__heading">Framework:</h4>
    <p class="wrapper__paragraph">VUE3</p>
    <h4 class="wrapper__heading">CSS preprocessor:</h4>
    <p class="wrapper__paragraph">SCSS</p>
    <h4 class="wrapper__heading">Animation:</h4>
    <p class="wrapper__paragraph">GSAP</p>
    <h4 class="wrapper__heading">Database:</h4>
    <p class="wrapper__paragraph">Firebase</p>
    <h4 class="wrapper__heading">Hosting provider:</h4>
    <p class="wrapper__paragraph">Netlify</p>
  </div>
</template>
<script>
import HeaderComponent from "@/components/HeaderComponent.vue";
export default {
  components: { HeaderComponent },
};
</script>

<style lang="scss" scoped>
.wrapper {
  @include wrapper-styles;

  &__heading {
    @include heading-styles;
  }

  &__paragraph {
    @include paragraph-styles;
  }
}
</style>
