import maleFace from "@/assets/images/maleFace.jpg";
import femaleFace from "@/assets/images/femaleFace.jpg";

export const userStories = [
  {
    id: 1,
    name: "Michael Cash",
    img: maleFace,
    details: ["Sex: Male", "Age: 42", "Job: Teacher"],
    bio: "Michael is an English teacher with a passion to teach and make a difference in the lives of his students. He recently decided to try cooking on his own. Besides work, he teaches theater classes for fun. He is really busy man.",
    task: "Find best spaghetti recipe",
    taskSteps: [
      "Open Mealtime app",
      "Authenticate",
      "Go to search tab",
      "Type: spaghetti",
      "Find best spaghetti recipe",
    ],
  },
  {
    id: 2,
    name: "Kate Lodger",
    img: femaleFace,
    details: ["Sex: Female", "Age: 30", "Job: Designer"],
    bio: "Kate is a product designer at one of the biggest fashion companies. She loves to have her own style and she isn’t scared of trying new things. In her free time Kate loves to spend time with her friends.",
    task: "Add and find her favorite dish",
    taskSteps: [
      "Open Mealtime app",
      "Authenticate",
      "Got to add meal tab",
      "Add meal by filling all inputs",
      "Go to profile tab",
      "Open your meals tab",
      "Find added favorite dish",
    ],
  },
];
