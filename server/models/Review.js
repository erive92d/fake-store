const { Schema, model } = require("mongoose");

const reviewSchema = new Schema({
  textBody: {
    type: String,
    required: true,
  },

  productId: {
    type: String,
    required: true,
  },
});

module.exports = reviewSchema;
