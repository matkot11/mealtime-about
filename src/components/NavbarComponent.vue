<template>
  <div class="navbar">
    <LogoComponent />
    <MenuComponent
      :menuButton="handleMenuButton"
      :isNavigationOpen="isNavigationOpen"
    />
    <NavigationComponent
      v-if="isNavigationOpen"
      :closeNavigation="handleMenuButton"
    />
  </div>
</template>

<script>
import LogoComponent from "@/components/LogoComponent.vue";
import MenuComponent from "@/components/MenuComponent.vue";
import NavigationComponent from "@/components/NavigationComponent.vue";
import { ref } from "vue";

export default {
  name: "NavbarComponent",
  setup() {
    const isNavigationOpen = ref(false);
    const handleMenuButton = () => {
      isNavigationOpen.value = !isNavigationOpen.value;
    };
    return {
      isNavigationOpen,
      handleMenuButton,
    };
  },
  components: { NavigationComponent, MenuComponent, LogoComponent },
};
</script>

<style lang="scss" scoped>
.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
