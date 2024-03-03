const { addProductToCart } = require("../../controllers/order-controller");
const { authMiddleware } = require("../../utils/auth");

const router = require("express").Router();

router.route("/").post(authMiddleware, addProductToCart)

module.exports = router;
