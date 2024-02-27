const { allProducts, singleProduct } = require("../../controllers/product.controller");

const router = require("express").Router();

router.route("/").get(allProducts)
router.route("/:productId").get(singleProduct)

module.exports = router;
