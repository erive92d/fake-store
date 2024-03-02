const { Product } = require("../models");


module.exports = {
    async allProducts(req, res) {
        try {

            const products = await Product.find({});
            if (!products) {
                return res.status(403).json({ error: 'Products not found' });
            }
            res.json(products)
        } catch (error) {
            console.error(error)
        }

    },
    async singleProduct(req, res) {
        try {
            // Extract the productId from the request params
            const productId = req.params.productId;
            // Find the product by ID in the database
            const product = await Product.findById(productId);
            // If product is not found, return 404 Not Found
            if (!product) {
                return res.status(404).json({ error: 'Product not found' });
            }
            // If product is found, return it as JSON response
            res.json(product);
        } catch (error) {
            // If there's an error, return 500 Internal Server Error
            console.error('Error fetching product:', error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    },
    async fetchByCategory(req, res) {
        const { categoryName } = req.params
        try {
            // Extract the productId from the request params
            // Find the product by ID in the database
            const product = await Product.find({category:categoryName});
            // If product is not found, return 404 Not Found
            if (!product) {
                return res.status(404).json({ error: 'Product not found' });
            }
            // If product is found, return it as JSON response
            res.json(product);
        } catch (error) {
            // If there's an error, return 500 Internal Server Error
            console.error('Error fetching product:', error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }
}