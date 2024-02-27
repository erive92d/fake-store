require("dotenv").config();
const connection = require("../config/connection");
const { User, Product } = require("../models");
const userData = require("./userData.json");
const axios = require("axios")
connection.on("error", (err) => err);

connection.once("open", async () => {
  console.log("connected");

  try {
    // Drop existing users
    const response = await axios.get('https://fakestoreapi.com/products/');
    const products = response.data
    await Product.insertMany(products)
    await User.deleteMany({});
    await User.create(userData);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.info("Seeding complete! 🌱");
  process.exit(0);
});

//     await User.deleteMany({});

//     const users = await User.insertMany(userData);

//     console.log('Users seeded!');
//     process.exit(0);
// });
