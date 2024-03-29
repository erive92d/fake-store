const { Product, Order } = require("../models");


module.exports = {
    async allProducts(req, res) {
        try {
            const products = await Product.find({});
            if (!products) {
                return res.status(403).json({ error: 'Products not found' });
            }
            res.status(200).json(products)
        } catch (error) {
            console.error(error)
            return res.status(500).json({ error: "Internal server error" })
        }

    },
    async singleProduct(req, res) {
        try {
            // Extract the productId from the request params
            const productId = req.params.productId;
            const productTitle = req.params.productTitle

            let product;

            // Find the product by ID in the database
            if (productId) {
                product = await Product.findById(productId);
            } else if (productTitle) {
                const partialTitle = new RegExp(req.params.productTitle, 'i'); // Case-insensitive search
                product = await Product.find({ title: { $regex: partialTitle } });
            }
            // If product is not found, return 404 Not Found
            if (!product) {
                return res.status(404).json({ error: 'Product not found' });
            }
            // If product is found, return it as JSON response
            res.status(200).json(product)
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
            const product = await Product.find({ category: categoryName });
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