<template>
  <div class="wrapper">
    <HeaderComponent text="User stories" />
    <div class="wrapper__buttons">
      <ButtonComponent
        @click="handleChangeUser(0)"
        :background-color="isFirstUser ? '#FD7515' : '#ffffff'"
        text="User 1"
      />
      <ButtonComponent
        @click="handleChangeUser(1)"
        text="User 2"
        :background-color="!isFirstUser ? '#FD7515' : '#ffffff'"
      />
    </div>
    <h3 class="wrapper__name">{{ userStories[isFirstUser].name }}</h3>
    <div class="details">
      <img
        v-show="!isFirstUser"
        class="details__image"
        src="@/assets/images/maleFace.jpg"
        :alt="userStories[isFirstUser].name + 'face'"
      />
      <img
        v-show="isFirstUser"
        class="details__image"
        src="@/assets/images/femaleFace.jpg"
        :alt="userStories[isFirstUser].name + 'face'"
      />
      <ul class="details__list">
        <li
          v-for="(element, index) in userStories[isFirstUser].details"
          :key="index"
          class="details__element"
        >
          {{ element }}
        </li>
      </ul>
    </div>
    <h4 class="wrapper__heading">BIO:</h4>
    <p class="wrapper__paragraph">
      {{ userStories[isFirstUser].bio }}
    </p>
    <h4 class="wrapper__heading">TASK:</h4>
    <p class="wrapper__paragraph">{{ userStories[isFirstUser].task }}</p>
    <ol class="wrapper__list">
      <li
        v-for="(element, index) in userStories[isFirstUser].taskSteps"
        :key="index"
        class="wrapper__element"
      >
        {{ element }}
      </li>
    </ol>
  </div>
</template>
<script>
import HeaderComponent from "@/components/HeaderComponent.vue";
import ButtonComponent from "@/components/ButtonComponent.vue";
import { userStories } from "../../data/userStories";
import { ref } from "vue";
export default {
  setup() {
    const isFirstUser = ref(0);
    const handleChangeUser = (value) => {
      isFirstUser.value = value;
    };

    return {
      isFirstUser,
      handleChangeUser,
      userStories,
    };
  },
  components: { ButtonComponent, HeaderComponent },
};
</script>

<style lang="scss" scoped>
.wrapper {
  @include wrapper-styles;

  &__buttons {
    padding-top: 2rem;
    width: 100%;
    display: flex;
    justify-content: space-evenly;
  }

  &__name {
    margin-top: 3rem;
    font-size: 2rem;
    font-weight: 400;
  }

  &__heading {
    @include heading-styles;
  }

  &__paragraph {
    @include paragraph-styles;
  }

  &__list {
    align-self: flex-start;
  }

  &__element {
    margin-top: 0.3rem;
  }
}

.details {
  margin: 3rem 0 1rem 0;
  display: flex;
  align-items: center;

  &__image {
    width: 11.5rem;
    border-radius: 50%;
  }

  &__list {
    list-style: none;
  }

  &__element {
    margin-top: 0.7rem;
  }
}
</style>
