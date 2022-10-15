import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import UserStoriesView from "../views/UserStoriesView.vue";
import SketchesView from "../views/SketchesView.vue";
import CritiqueView from "../views/CriqueView.vue";
import TechStackView from "../views/TechStackView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/user-stories",
      name: "userStories",
      component: UserStoriesView,
    },
    {
      path: "/sketches",
      name: "sketches",
      component: SketchesView,
    },
    {
      path: "/critique",
      name: "critique",
      component: CritiqueView,
    },
    {
      path: "/tech-stack",
      name: "techStack",
      component: TechStackView,
    },
  ],
});

export default router;
