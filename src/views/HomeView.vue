<template>
  <div class="home">
    <img
      class="home__image"
      src="../assets/images/heroImage.jpg"
      alt="Hamburger"
    />
    <p class="home__about">
      The Mealtime app helps you find the best meals. This app will provide easy
      access to the best recipes for cooking, so no one will have to rely on
      other sources. App will be very flexible in terms of user needs as it will
      have categories as meal type, diet type and difficultness level.
    </p>
    <div class="functionality">
      <p class="functionality__header">Main functionality:</p>
      <ul class="functionality__list">
        <li class="functionality__element">Add, edit and delete meals</li>
        <li class="functionality__element">Access to everyone’s meals</li>
        <li class="functionality__element">Search for meal</li>
        <li class="functionality__element">Favorite section</li>
        <li class="functionality__element">Authentication</li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.home {
  &__image {
    margin: -5rem -1.5rem 0 -1.5rem;
    height: 40rem;
    width: 100vw;
    object-fit: cover;
    opacity: 90%;
  }

  &__about {
    margin: 2rem 1rem 0 1rem;
    font-size: 1.8rem;
    font-weight: 400;
  }
}

.functionality {
  margin: 2rem 1rem 0 1rem;
  font-size: 1.8rem;
  font-weight: 400;

  &__list {
    margin-top: 1rem;
  }

  &__element {
    margin-top: 0.3rem;
  }
}
</style>
