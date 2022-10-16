<template>
  <div class="wrapper">
    <HeaderComponent text="Sketches" />
    <div class="accordion">
      <details
        v-for="sketch in sketches"
        :key="sketch.id"
        class="accordion__element"
      >
        <summary class="accordion__summary">{{ sketch.name }}</summary>
        <div class="about">
          <img
            @click="handleResizeImage(sketch.id)"
            class="about__image"
            :class="isImageBig && indexOfResizedImage === sketch.id && 'big'"
            :src="sketch.image"
            :alt="sketch.name"
          />
          <p class="about__paragraph">{{ sketch.text }}</p>
        </div>
      </details>
    </div>
  </div>
</template>
<script>
import HeaderComponent from "@/components/HeaderComponent.vue";
import { sketches } from "@/data/sketches";
import { ref } from "vue";
export default {
  setup() {
    const isImageBig = ref(false);
    const indexOfResizedImage = ref(null);

    const handleResizeImage = (value = 0) => {
      indexOfResizedImage.value = value;
      isImageBig.value = !isImageBig.value;
    };

    return {
      sketches,
      isImageBig,
      indexOfResizedImage,
      handleResizeImage,
    };
  },
  components: { HeaderComponent },
};
</script>

<style lang="scss" scoped>
.wrapper {
  @include wrapper-styles;
}

.accordion {
  width: 100%;

  &__element {
    padding: 0.9rem 1rem;
  }

  &__summary {
  }
}

.about {
  padding: 3rem 0;
  display: flex;
  justify-content: space-between;

  &__image {
    width: 10rem;
    border: 1px solid $black-color;
    border-radius: 5px;
  }

  &__paragraph {
    width: 20rem;
  }
}

.big {
  @include fullscreen-image-styles;
}
</style>
