const { Schema, model } = require("mongoose");
const dateFormat = require("../utils/dateFormat")
const reviewSchema = new Schema({
  textBody: {
    type: String,
    required: true,
  },

  productId: {
    type: Number,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: (timestamp) => dateFormat(timestamp),
  },

});

module.exports = reviewSchema;
