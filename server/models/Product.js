const { Schema, model } = require("mongoose");

// This is a subdocument schema, it won't become its own model but we'll use it as the schema for the User's `rsvp` in User.js
const productSchema = new Schema({
  id: {
    type: Number,
    required: true
  },
  title: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
  },
  description: {
    type: String,
  },
  image: {
    type: String,
  },
  rating: {
    rate: {
      type: Number
    },
    count: {
      type: Number
    }
  }
});


const Product = model("Product", productSchema);

module.exports = Product;
