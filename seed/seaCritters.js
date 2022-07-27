const db = require("../db");
const SeaCritter = require("../models/seaCritter");

db.on("error", console.error.bind(console, "MongoDB connection error:"));

const main = async () => {
  const seaCritters = [
    {
      number: 1,
      name: "Seaweed",
      iconImage: "https://dodo.ac/np/images/8/8c/Seaweed_NH_Icon.png",
      sellPrice: "600 Bells",
      shadow: "Large",
      shadowMovement: "Stationary",
      timeOfDay: "All day",
      totalCatches: 0,
    },
    {
      number: 2,
      name: "Sea Grapes",
      iconImage: "https://dodo.ac/np/images/e/e7/Sea_Grapes_NH_Icon.png",
      sellPrice: "900 Bells",
      shadow: "Small",
      shadowMovement: "Stationary",
      timeOfDay: "All day",
      totalCatches: 0,
    },
    {
      number: 3,
      name: "Sea Cucumber",
      iconImage: "https://dodo.ac/np/images/9/9b/Sea_Cucumber_NH_Icon.png",
      sellPrice: "500 Bells",
      shadow: "Medium",
      shadowMovement: "Very slow",
      timeOfDay: "All day",
      totalCatches: 0,
    },
    {
      number: 4,
      name: "Sea Pig",
      iconImage: "https://dodo.ac/np/images/a/a9/Sea_Pig_NH_Icon.png",
      sellPrice: "10,000 Bells",
      shadow: "Small",
      shadowMovement: "Very fast",
      timeOfDay: "4 PM - 9 AM",
      totalCatches: 80,
    },
    {
      number: 5,
      name: "Sea Star",
      iconImage: "https://dodo.ac/np/images/6/6c/Sea_Star_NH_Icon.png",
      sellPrice: "500 Bells",
      shadow: "Small",
      shadowMovement: "Very slow",
      timeOfDay: "All day",
      totalCatches: 0,
    },
    {
      number: 6,
      name: "Sea Urchin",
      iconImage: "https://dodo.ac/np/images/9/9c/Sea_Urchin_NH_Icon.png",
      sellPrice: "1,700 Bells",
      shadow: "Small",
      shadowMovement: "Slow",
      timeOfDay: "All day",
      totalCatches: 0,
    },
    {
      number: 7,
      name: "Sea Pencil Urchin",
      iconImage:
        "https://dodo.ac/np/images/0/05/Slate_Pencil_Urchin_NH_Icon.png",
      sellPrice: "2,000 Bells",
      shadow: "Medium",
      shadowMovement: "Medium",
      timeOfDay: "4 PM - 9 AM",
      totalCatches: 20,
    },
    {
      number: 8,
      name: "Sea Anemone",
      iconImage: "https://dodo.ac/np/images/e/e9/Sea_Anemone_NH_Icon.png",
      sellPrice: "500 Bells",
      shadow: "Large",
      shadowMovement: "Stationary",
      timeOfDay: "All day",
      totalCatches: 0,
    },
    {
      number: 9,
      name: "Moon Jellyfish",
      iconImage: "https://dodo.ac/np/images/f/f9/Moon_Jellyfish_NH_Icon.png",
      sellPrice: "600 Bells",
      shadow: "Small",
      shadowMovement: "Very slow",
      timeOfDay: "All day",
      totalCatches: 0,
    },
    {
      number: 10,
      name: "Sea Slug",
      iconImage: "https://dodo.ac/np/images/5/54/Sea_Slug_NH_Icon.png",
      sellPrice: "600 Bells",
      shadow: "Tiny",
      shadowMovement: "Very slow",
      timeOfDay: "All day",
      totalCatches: 0,
    },
  ];
  await SeaCritter.insertMany(seaCritters);
  console.log("Created some critters!");
};

const run = async () => {
  await main();
  db.close();
};

run();
