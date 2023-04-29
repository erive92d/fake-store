const router = require('express').Router();
const {
  createUser,
  getSingleUser,
  saveProduct,
  deleteProduct,
  login,
  allUsers
} = require('../../controllers/user-controller');

// import middleware
const { authMiddleware } = require('../../utils/auth');

// put authMiddleware anywhere we need to send a token for verification of user
router.route('/').post(createUser).put(authMiddleware, saveProduct).get(allUsers);


router.route('/login').post(login);

router.route('/me').get(authMiddleware, getSingleUser);

router.route('/products/:productId').delete(authMiddleware, deleteProduct);

module.exports = router;
