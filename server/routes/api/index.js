const router = require('express').Router();
const userRoutes = require('./user-routes');
const productRoutes = require("./product-routes")
const orderRoutes = require("./order-routes")

router.use('/users', userRoutes);
router.use('/products', productRoutes)
router.use('/order', orderRoutes)


module.exports = router;
