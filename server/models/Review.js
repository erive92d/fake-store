const { Schema, model } = require("mongoose");

const reviewSchema = new Schema({
  textBody: {
    type: String,
    required: true,
  },

  productId: {
    type: Number,
    required: true,
  },

});

module.exports = reviewSchema;
