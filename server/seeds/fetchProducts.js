const axios = require('axios');
const { Product } = require("../models");

async function fetchAndSaveProducts() {
    try {
        // Fetch data from external API
        const response = await axios.get('https://fakestoreapi.com/products/');
        const products = response.data

        await Product.insertMany(products)
        // await Product.insertMany(products);
        console.log('Data fetched and saved successfully');
    } catch (error) {
        console.error('Error fetching and saving data:', error);
    }
}

// Call the function to fetch and save data
fetchAndSaveProducts();