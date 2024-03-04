const { addProductToCart, getOrdersFromUser, removeItem } = require("../../controllers/order-controller");
const { authMiddleware } = require("../../utils/auth");

const router = require("express").Router();

router.route("/").post(authMiddleware, addProductToCart).get(authMiddleware, getOrdersFromUser)
router.route("/:productId/:size?").delete(authMiddleware, removeItem)

module.exports = router;
