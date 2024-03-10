const { Product, Order } = require("../models");

module.exports = {
    async getOrdersFromUser({ user = null, body }, res) {
        try {
            const order = await Order.findOne({ user: user._id })
                .populate("products.product")
                .populate("user");
            if (!order) {
                return res.status(500).json({ message: "User order could not be found" })
            }
            res.status(200).json(order)
        } catch (error) {
            console.error(error)
            return res.status(500).json({ message: "Internal Server Error" })
        }
    },
    async addProductToCart({ user = null, body }, res) {
        try {
            //Fetch the product from DB
            const product = await Product.findById(body.productId);
            const isClothes = product.category === "men's clothing" || product.category === "women's clothing"
            if (isClothes && !body.size) {
                return res.status(404).json({ message: 'Select size' });
            }
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


            const existingProductIndex = order.products.findIndex(item =>
                item.product.equals(body.productId) && item.size === body.size
            );

            // console.log(order.products[existingProductIndex], "this is the product")
            if (existingProductIndex !== -1) {
                // If the product exists, update the quantity
                order.products[existingProductIndex].quantity += body.quantity;
            } else {
                // If the product doesn't exist, add it to the order
                order.products.push({ product: body.productId, quantity: body.quantity, size: body.size })
            }

            //Calculate the total price
            const totalPrice = order.products.reduce((total, item) => {
                const productPrice = product.price;
                return total + productPrice * item.quantity;
            }, 0);

            //Apply the total to Order
            order.total = totalPrice;
            //Save the changes
            await order.save();
            res.status(201).json({ message: 'Item added to Order successfully', order });
        } catch (error) {
            console.error('Error adding item to cart:', error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    },
    async removeItem({ user = null, params }, res) {
        // We are grabbing the params provided by client side
        const productId = params.productId
        const size = params.size

        try {
            //There are items such as Electronics that does not have size attribute
            //We are making a an object that we can user later to find the specific item
            //initial object called filter, it contains the productId of the product attribute
            //both electronics and clothes have productId so this is good
            let filter = {
                product: productId
            }

            //Unlike electronics, clothes and backpacks have size attributes
            //We will update the object called filter and add the size attribute
            //if the item provided has size attribute such as clothes and backpacks
            //That way we can specify the item with both id and size
            //In clothes situation, two clothes may have the same productId so we don't want to delete both of them
            //we will add their given size so we can specify which item to delete
            if (size) {
                filter.size = size
            }
            //if the item does not have size, such as electronics. we will leave the filter object with productId itself

            const updatedOrder = await Order.findOneAndUpdate(
                { user: user._id },
                { $pull: { products: filter } }, //Here we will use the filter object that we made earlier to pull the specific product
                { new: true }
            );

            if (!updatedOrder) {
                throw new Error('Order not found');
            }

            const message = 'Item removed from order successfully'

            console.log(message);
            return res.status(200).json({ message });
        } catch (error) {
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }
}