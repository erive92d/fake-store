// import user model
const { User, Order, Review } = require("../models");
// import sign token function from auth
const { signToken } = require("../utils/auth");

module.exports = {
  //get all users
  async allUsers(req, res) {
    const getUsers = await User.find();
    // console.log(getUsers);
    res.json(getUsers);
  },

  // get a single user by either their id or their username
  async getSingleUser({ user = null, params }, res) {
    console.log(user);
    const foundUser = await User.findOne({
      $or: [
        { _id: user ? user._id : params.id },
        { username: params.username },
      ],
    });

    if (!foundUser) {
      return res
        .status(400)
        .json({ message: "Cannot find a user with this id!" });
    }
    // console.log(foundUser);
    res.json(foundUser);
  },
  // create a user, sign a token, and send it back (to client/src/components/SignUpForm.js)
  async createUser({ body }, res) {
    try {
      const user = await User.create(body);

      if (!user) {
        return res.status(400).json({ message: "Something is wrong!" });
      }

      const token = signToken(user);
      res.json({ token, user });
    } catch (error) {
      console.log(Object.keys(error));
      console.log(error.keyValue.username);
      if (error.keyValue.username) {
        return res.status(561).json({ msg: "Username already exist." });
      }
      if (error.keyValue.email) {
        return res.status(562).json({ msg: "Email already exist." });
      }
      return res.status(560).json(error);
    }
  },
  // login a user, sign a token, and send it back (to client/src/components/LoginForm.js)
  // {body} is destructured req.body
  async login({ body }, res) {
    const user = await User.findOne({
      $or: [{ username: body.username }, { email: body.email }],
    });
    if (!user) {
      return res.status(400).json({ message: "Can't find this user" });
    }

    const correctPw = await user.isCorrectPassword(body.password);

    if (!correctPw) {
      return res.status(400).json({ message: "Wrong password!" });
    }
    const token = signToken(user);
    res.json({ token, user });
  },
  // save a book to a user's `savedBooks` field by adding it to the set (to prevent duplicates)
  // user comes from `req.user` created in the auth middleware function
  async saveProduct({ user, body }, res) {
    try {
      const updatedUser = await User.findOneAndUpdate(
        { _id: user._id },
        { $addToSet: { order: body } },
        { new: true }
      );
      return res.json(updatedUser);
    } catch (err) {
      console.log(err);
      return res.status(400).json(err);
    }
  },
  // remove a book from `savedBooks`
  async deleteProduct({ user, params }, res) {
    const updatedUser = await User.findOneAndUpdate(
      { _id: user._id },
      { $pull: { order: { _id: params.productId } } },
      { new: true }
    );
    if (!updatedUser) {
      return res
        .status(404)
        .json({ message: "Couldn't find user with this id!" });
    }
    return res.json(updatedUser);
  },
  async makeReview({ user = null, body, params }, res) {
    console.log(user, "@user");

    const userReview = await User.findOneAndUpdate(
      {
        $or: [
          { _id: user ? user._id : params.id },
          { username: body.username },
        ],
      },
      {
        $addToSet: {
          review: { productId: params.productId, textBody: body.textBody },
        },
      },
      {
        new: true,
      }
    );

    if (!userReview) {
      return res.status(404).json({ message: "Couldn't make a review" });
    }
    return res.json(userReview);
  },
};
