const { Product, Order } = require("../models");

module.exports = {
    async addProductToCart({ user = null, body }, res) {
        try {
            //Fetch the product from DB
            const product = await Product.findById(body.productId);

            //If Product could not be found, send Error
            if (!product) {
                return res.status(404).json({ message: 'Product not found' });
            }

            //Check if the user already has order
            let order = await Order.findOne({ user: user._id })

            //If not, create an order for the user
            if (!order) {
                order = new Order({ user: user._id })
            }

            //Update the order with new Product
            order.products.push({ product: body.productId, quantity: body.quantity, size: body.size })

            //Calculate the total price
            const totalPrice = order.products.reduce((total, item) => {
                const productPrice = product.price;
                return total + productPrice * item.quantity;
            }, 0);

            //Apply the total to Order
            order.total = totalPrice;

            console.log(order, "@@")
            //Save the changes
            await order.save();
            res.status(201).json({ message: 'Item added to Order successfully', order });
        } catch (error) {
            console.error('Error adding item to cart:', error);
            res.status(500).json({ error: 'Internal Server Error' });
        }

    }
}