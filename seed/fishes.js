const db = require("../db");
const { Fish } = require("../models");

db.on("error", console.error.bind(console, "MongoDB connection error:"));

const main = async () => {
  const fishes = [
    {
      number: 1,
      name: "Bitterling",
      iconImage: "https://dodo.ac/np/images/4/4d/Bitterling_NH_Icon.png",
      sellPrice: "900 Bells",
      shadow: "Tiny",
      location: "River",
      timeOfDay: "All Day",
      totalCatches: 0,
    },
    {
      number: 2,
      name: "Pale Chub",
      iconImage: "https://dodo.ac/np/images/e/e2/Pale_Chub_NH_Icon.png",
      sellPrice: "200 Bells",
      shadow: "Tiny",
      location: "River",
      timeOfDay: "9 AM - 4 PM",
      totalCatches: 0,
    },
    {
      number: 3,
      name: "Curcian Carp",
      iconImage: "https://dodo.ac/np/images/f/f2/Crucian_Carp_NH_Icon.png",
      sellPrice: "160 Bells",
      shadow: "Small",
      location: "River",
      timeOfDay: "All day",
      totalCatches: 0,
    },
    {
      number: 4,
      name: "Dace",
      iconImage: "https://dodo.ac/np/images/d/db/Dace_NH_Icon.png",
      sellPrice: "240 Bells",
      shadow: "Medium",
      location: "River",
      timeOfDay: "4 PM - 9 AM",
      totalCatches: 0,
    },
    {
      number: 5,
      name: "Carp",
      iconImage: "https://dodo.ac/np/images/5/5d/Carp_NH_Icon.png",
      sellPrice: "300 Bells",
      shadow: "Large",
      location: "Pond",
      timeOfDay: "All day",
      totalCatches: 0,
    },
    {
      number: 6,
      name: "Koi",
      iconImage: "https://dodo.ac/np/images/2/2d/Koi_NH_Icon.png",
      sellPrice: "4,000 Bells",
      shadow: "Large",
      location: "Pond",
      timeOfDay: "4 PM - 9 AM",
      totalCatches: 20,
    },
    {
      number: 7,
      name: "Goldfish",
      iconImage: "https://dodo.ac/np/images/7/71/Goldfish_NH_Icon.png",
      sellPrice: "1,300 Bells",
      shadow: "Tiny",
      location: "Pond",
      timeOfDay: "All day",
      totalCatches: 0,
    },
    {
      number: 8,
      name: "Pop-eyed Goldfish",
      iconImage: "https://dodo.ac/np/images/0/0d/Pop-Eyed_Goldfish_NH_Icon.png",
      sellPrice: "1,300 Bells",
      shadow: "Tiny",
      location: "Pond",
      timeOfDay: "9 AM - 4 PM",
      totalCatches: 0,
    },
    {
      number: 9,
      name: "Ranchu Goldfish",
      iconImage: "https://dodo.ac/np/images/3/35/Ranchu_Goldfish_NH_Icon.png",
      sellPrice: "4,500 Bells",
      shadow: "Small",
      location: "Pond",
      timeOfDay: "9 AM - 4 PM",
      totalCatches: 20,
    },
    {
      number: 10,
      name: "Killifish",
      iconImage: "https://dodo.ac/np/images/e/ea/Killifish_NH_Icon.png",
      sellPrice: "300 Bells",
      shadow: "Tiny",
      location: "Pond",
      timeOfDay: "All day",
      totalCatches: 0,
    },
  ];
  await Fish.insertMany(fishes);
  console.log("Created some fishes!");
};
const run = async () => {
  await main();
  db.close();
};
run();
