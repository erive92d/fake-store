const { addOrder } = require("../../controllers/order-controller");

const router = require("express").Router();

router.route("/").get(addOrder)

module.exports = router;
