import { Item, Workout } from "../types";

export const workoutData: Array<Workout> = [
  {
    name: "Weight Training",
    emoji: "dumbbell",
  },
  {
    name: "Yoga",
    emoji: "yoga",
  },
  {
    name: "Cardio",
    emoji: "google-fit",
  },
  {
    name: "Chest",
    emoji: "dumbbell",
  },
  {
    name: "Legs",
    emoji: "dumbbell",
  },
];

export const activityStats = [
  {
    val: "70",
    type: "bpm",
  },
  {
    val: "2800",
    type: "kcal",
  },
  {
    val: "50",
    type: "hrs",
  },
  {
    val: "48",
    type: "hrs",
  },
];

export const bodyMeasurements = [
  {
    val: 55,
    type: "kg",
    name: "Weight",
  },
  {
    val: 175,
    type: "cm",
    name: "Height",
  },
  {
    val: 20,
    type: "yo",
    name: "Age",
  },
];

export const shopData: Array<Item> = [
  {
    image:
      "https://s1.thcdn.com/productimg/1600/1600/11654605-9404622705446497.jpg",
    name: "Whey Protein",
  },
  {
    image:
      "https://images-na.ssl-images-amazon.com/images/I/71M%2BH6iusEL._SX425_.jpg",
    name: "Dumbell",
  },
  {
    image:
      "https://5.imimg.com/data5/QK/UH/ND/SELLER-79092232/bench-press-500x500.jpg",
    name: "Bench Press",
  },
];
