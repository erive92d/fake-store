// import user model
const { User } = require("../models");
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
    res.json(foundUser);
  },

  async createUser({ body }, res) {

    try {
      const userCheck = await User.findOne({ email: body.email })
      if (userCheck) {
        return res.status(400).json({ message: "User email is already taken" });
      }
      const user = await User.create(body);

      if (!user) {
        return res.status(401).json({ message: "Something is wrong!" });
      }
      const token = signToken(user);
      res.json({ token, user });
    } catch (error) {
      return res.status(560).json(error);
    }
  },

  async login({ body }, res) {
    const user = await User.findOne({
      $or: [{ username: body.username }, { email: body.email }],
    });

    if (!user) {
      return res.status(400).json({ message: "Email cannot be found" });
    }

    const correctPw = await user.isCorrectPassword(body.password);

    if (!correctPw) {
      return res.status(401).json({ message: "Wrong password!" });
    }
    const token = signToken(user);
    res.json({ user, token });
  },

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

};
