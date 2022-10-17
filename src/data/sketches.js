import landingPage from "@/assets/images/sketches/landingPage.jpg";
import register from "@/assets/images/sketches/register.jpg";
import login from "@/assets/images/sketches/login.jpg";
import changePassword from "@/assets/images/sketches/changePassword.jpg";
import home from "@/assets/images/sketches/home.jpg";
import mealDetails from "@/assets/images/sketches/mealDetails.jpg";
import search from "@/assets/images/sketches/search.jpg";
import addMeal from "@/assets/images/sketches/addMeal.jpg";
import favoriteMeals from "@/assets/images/sketches/favoriteMeals.jpg";
import profile from "@/assets/images/sketches/profile.jpg";
import yourMeals from "@/assets/images/sketches/yourMeals.jpg";
import editMeal from "@/assets/images/sketches/editMeal.jpg";

export const sketches = [
  {
    id: 1,
    name: "Landing page",
    image: landingPage,
    text: "Landing page shows logo, login and registration buttons.",
  },
  {
    id: 2,
    name: "Register",
    image: register,
    text: "Register page contains form to register new user. User has to provide full name, mail and password.",
  },
  {
    id: 3,
    name: "Login",
    image: login,
    text: "Login page contains form to authenticate existing user. User has to provide mail and password.",
  },
  {
    id: 4,
    name: "Change password",
    image: changePassword,
    text: "Change password page allows user to change password.",
  },
  {
    id: 5,
    name: "Home page",
    image: home,
    text: "Home page is a first page that shows after authentication. It contains all recipes from database.",
  },
  {
    id: 6,
    name: "Meal details",
    image: mealDetails,
    text: "Meal details page shows everything about the meal. It also allows to add meal to favorites.",
  },
  {
    id: 7,
    name: "Search",
    image: search,
    text: "Search page allows user to find recipe by name.",
  },
  {
    id: 8,
    name: "Add meal",
    image: addMeal,
    text: "Add meal page contains form to add meal. User has to provide name, image url, recipe instruction, ingredients, meal type, diet and difficultness to add meal.",
  },
  {
    id: 9,
    name: "Favorite meals",
    image: favoriteMeals,
    text: "Favorite meals page contains all meals, which were added to favorites",
  },
  {
    id: 10,
    name: "Profile page",
    image: profile,
    text: "Profile page contains buttons to see added meals, change password and logout.",
  },
  {
    id: 11,
    name: "Your meals",
    image: yourMeals,
    text: "Your meals page contains all meals that user added.",
  },
  {
    id: 12,
    name: "Edit meal",
    image: editMeal,
    text: "Edit meal page contains form to edit already added meal.",
  },
];
