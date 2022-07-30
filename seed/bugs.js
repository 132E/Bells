const db = require("../db");
const { Bug } = require("../models");

db.on("error", console.error.bind(console, "MongoDB connection error:"));

const main = async () => {
  const bugs = [
    {
      number: 1,
      name: "Common Butterfly",
      iconImage: "https://dodo.ac/np/images/f/f8/Common_Butterfly_NH_Icon.png",
      sellPrice: "160 Bells",
      location: "Flying",
      weather: "Any except rain",
      timeOfDay: "4 AM - 7 PM",
      totalCatches: 0,
    },
    {
      number: 2,
      name: "Yellow Butterfly",
      iconImage: "https://dodo.ac/np/images/4/43/Yellow_Butterfly_NH_Icon.png",
      sellPrice: "160 Bells",
      location: "Flying",
      weather: "Any except rain",
      timeOfDay: "4 AM - 7 PM",
      totalCatches: 0,
    },
    {
      number: 3,
      name: "Tiger Butterfly",
      iconImage: "https://dodo.ac/np/images/b/b6/Tiger_Butterfly_NH_Icon.png",
      sellPrice: "240 Bells",
      location: "Flying",
      weather: "Any except rain",
      timeOfDay: "4 AM - 7 PM",
      totalCatches: 0,
    },
    {
      number: 4,
      name: "Peacock Butterfly",
      iconImage: "https://dodo.ac/np/images/7/77/Peacock_Butterfly_NH_Icon.png",
      sellPrice: "2500 Bells",
      location: "Flying near blue, purple, and black flowers",
      weather: "Any except rain",
      timeOfDay: "4 AM - 7 PM",
      totalCatches: 20,
    },
    {
      number: 5,
      name: "Common Bluebottle",
      iconImage: "https://dodo.ac/np/images/2/21/Common_Bluebottle_NH_Icon.png",
      sellPrice: "300 Bells",
      location: "Flying",
      weather: "Any except rain",
      timeOfDay: "4 AM - 7 PM",
      totalCatches: 0,
    },
    {
      number: 6,
      name: "Paper Kite Butterfly",
      iconImage:
        "https://dodo.ac/np/images/9/9e/Paper_Kite_Butterfly_NH_Icon.png",
      sellPrice: "1000 Bells",
      location: "Flying near flowers",
      weather: "Any except rain",
      timeOfDay: "8 AM - 7 PM",
      totalCatches: 0,
    },
    {
      number: 7,
      name: "Great Purple Emperor",
      iconImage:
        "https://dodo.ac/np/images/8/81/Great_Purple_Emperor_NH_Icon.png",
      sellPrice: "3000 Bells",
      location: "Flying near  flowers",
      weather: "Any except rain",
      timeOfDay: "4 AM - 7 PM",
      totalCatches: 50,
    },
    {
      number: 8,
      name: "Monarch Butterfly",
      iconImage: "https://dodo.ac/np/images/3/38/Monarch_Butterfly_NH_Icon.png",
      sellPrice: "140 Bells",
      location: "Flying near flowers",
      weather: "Any except rain",
      timeOfDay: "4 AM - 5 PM",
      totalCatches: 0,
    },
    {
      number: 9,
      name: "Emperor Butterfly",
      iconImage: "https://dodo.ac/np/images/c/cf/Emperor_Butterfly_NH_Icon.png",
      sellPrice: "4000 Bells",
      location: "Flying near flowers",
      weather: "Any except rain",
      timeOfDay: "5 PM - 8 AM",
      totalCatches: 20,
    },
    {
      number: 10,
      name: "Agrias Butterfly",
      iconImage: "https://dodo.ac/np/images/6/60/Agrias_Butterfly_NH_Icon.png",
      sellPrice: "3000 Bells",
      location: "Flying near flowers",
      weather: "Any except rain",
      timeOfDay: "8 AM - 5 PM",
      totalCatches: 20,
    },
    {
      number: 80,
      name: "Scorpion",
      iconImage: "https://dodo.ac/np/images/9/95/Scorpion_NH_Icon.png",
      sellPrice: "8000 Bells",
      location: "On the ground",
      weather: "Any weather",
      timeOfDay: "7 PM - 4 AM",
      totalCatches: 0,
    },
  ];
  await Bug.insertMany(bugs);
  console.log("Created some bugs!");
};
const run = async () => {
  await main();
  db.close();
};
run();
