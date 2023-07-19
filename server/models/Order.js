const { Schema, model } = require("mongoose");
const productSchema = require("./Product");

// This is a subdocument schema, it won't become its own model but we'll use it as the schema for the User's `rsvp` in User.js
const orderSchema = new Schema({
    fname: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    payment: {
        type: String,
        required: true
    },
    products: [productSchema],
    orderBy: {
        type: Date,
        default: Date.now,
        get: (timestamp) => dateFormat(timestamp),
    }
});

module.exports = orderSchema
