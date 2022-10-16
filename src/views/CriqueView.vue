<template>
  <div class="wrapper">
    <HeaderComponent text="Critique" />
    <h4 class="wrapper__heading">Title:</h4>
    <p class="wrapper__paragraph">Tasty</p>
    <h4 class="wrapper__heading">About app:</h4>
    <p class="wrapper__paragraph">
      Database with recipes which contain video, images, list of ingredients and
      step by step instruction. User is able to comment each recipe and rate it.
    </p>
    <h4 class="wrapper__heading">Functionality:</h4>
    <ul class="wrapper__list">
      <li>Add, edit and delete recipe</li>
      <li>Search for recipes</li>
      <li>Find guides how to cook</li>
      <li>Create shopping list</li>
      <li>Save favorite recipes</li>
    </ul>
    <h4 class="wrapper__heading">Images:</h4>
    <div class="carousel">
      <button @click="handleChangeImage(-1)" class="carousel__arrow-left">
        <img src="../assets/icons/leftArrow.svg" alt="Left arrow" />
      </button>
      <img
        v-show="showImage === 1"
        @click="handleResizeImage"
        src="../assets/images/tasty/recipes.jpg"
        alt="Recipes"
        class="carousel__image"
        :class="isImageBig && 'big'"
      />
      <img
        v-show="showImage === 2"
        @click="handleResizeImage"
        src="../assets/images/tasty/recipe.jpg"
        alt="Recipe"
        class="carousel__image"
        :class="isImageBig && 'big'"
      />
      <img
        v-show="showImage === 3"
        @click="handleResizeImage"
        src="../assets/images/tasty/shoppingList.jpg"
        alt="Shopping list"
        class="carousel__image"
        :class="isImageBig && 'big'"
      />
      <img
        v-show="showImage === 4"
        @click="handleResizeImage"
        src="../assets/images/tasty/guides.jpg"
        alt="Guides"
        class="carousel__image"
        :class="isImageBig && 'big'"
      />
      <button @click="handleChangeImage(1)" class="carousel__arrow-right">
        <img src="../assets/icons/rightArrow.svg" alt="Right arrow" />
      </button>
    </div>
  </div>
</template>
<script>
import HeaderComponent from "@/components/HeaderComponent.vue";
import { ref } from "vue";
export default {
  setup() {
    const showImage = ref(1);
    const isImageBig = ref(false);

    const handleChangeImage = (value) => {
      if (showImage.value + value === 5) {
        showImage.value = 1;
      } else if (showImage.value + value === 0) {
        showImage.value = 4;
      } else {
        showImage.value += value;
      }
    };

    const handleResizeImage = () => {
      isImageBig.value = !isImageBig.value;
    };

    return {
      showImage,
      handleChangeImage,
      handleResizeImage,
      isImageBig,
    };
  },
  components: { HeaderComponent },
};
</script>

<style lang="scss" scoped>
.wrapper {
  @include wrapper-styles;

  &__heading {
    @include heading-styles;
  }

  &__paragraph,
  &__list {
    @include paragraph-styles;
  }

  &__list {
    margin: 0;
  }
}

.carousel {
  display: flex;

  &__arrow-left,
  &__arrow-right {
    margin: 0 2rem;
    width: 4rem;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }

  &__image {
    width: 12rem;
    border-radius: 5px;
    border: 1px solid $black-color;
  }
}

.big {
  @include fullscreen-image-styles;
}
</style>
