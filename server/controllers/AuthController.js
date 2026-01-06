const User = require("../models/UserModel");
const { createSecretToken } = require("../util/SecretToken");
const bcrypt = require("bcryptjs");

module.exports.Signup = async (req, res) => {
  try {

    /* SIGN UP */
    console.log("REQ BODY", req.body);

    if (!req.body) {
      return res.status(400).json({ message: "Request body missing" });
    }

    const { email, password, username } = req.body;

    if (!email || !password || !username) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ message: "User already exists" });
    }

    const user = await User.create({
      email,
      password,
      username,
    });

    const token = createSecretToken(user._id);

    res.cookie("token", token, {
      httpOnly: true,
      sameSite: "lax",
    });

    res.status(201).json({
      message: "User Signup Successfully",
      success: true,
      user: {
        id: user._id,
        email: user.email,
        username: user.username,
      },
    });
  } catch (error) {
    console.error("SIGNUP ERROR", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};


/* LOGIN */
module.exports.Login = async (req, res, next) => {
  try {
    console.log("login details", req.body)
    const { email, password } = req.body;
    if (!email || !password) {
      return res.json({ message: "All fields are required" })
    }
    const user = await User.findOne({ email });
    if (!user) {
      return res.json({ message: "Incorrect Password or Email" })
    }
    const auth = await bcrypt.compare(password, user.password)
    if (!auth) {
      return res.json({ message: "Incorrect pasword" })
    }
    const token = createSecretToken(user._id);
    res.cookie("token", token, {
      httpOnly: false,
      secure: false, // Set to true in production with HTTPS
      sameSite: "lax",
    });
    res.status(201).json({ message: "User logged in successfully", success: true });
  } catch (error) {
    console.error(error)
  }
};