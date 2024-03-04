const { addProductToCart } = require("../../controllers/product.controller");
const {
    allProducts,
    singleProduct,
    fetchByCategory,
} = require("../../controllers/product.controller");
const { authMiddleware } = require("../../utils/auth");


const router = require("express").Router();

router.route("/").get(allProducts);
router.route("/:productId").get(singleProduct);
router.route("/c/:categoryName").get(fetchByCategory);
module.exports = router;
