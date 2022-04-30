import env from "dotenv";
import jwt from "jsonwebtoken";
import Admin from "../models/Admin.js";
import User from "../models/User.js";
env.config();

const JWT_SECRET = process.env.SECRET_JWT;

// Create user
export const createUser = async (req, res) => {
  try {
    let success = false;
    let user = await User.findOne({ email: req.body.email });
    if (user) {
      res
        .status(400)
        .json({ error: "Please try again by entering unique value" });
    }

    // creating new user
    user = await User.create({
      email: req.body.email,
      fullname: req.body.fullname,
      password: req.body.password,
    });
    const dataId = {
      user: {
        id: user.id,
      },
    };
    success = true;
    const user1 = await User.findById(dataId.user.id);

    res.json({ success, user1 });

  } catch (error) {
    console.log("there is error in creating user", error);
  }
};



// Admin Signup
export const adminSignup = async (req, res) => {
  try {
    let success = false;
    let admin = await Admin.findOne({ email: req.body.email });
    if (admin) {
      res
        .status(400)
        .json({ error: "Please try again by entering unique value" });
    }

    // creating new user
    admin = await Admin.create({
      email: req.body.email,
      fullname: req.body.fullname,
      password: req.body.password,
    });
    const dataId = {
      user: {
        id: admin.id,
      },
    };
    success = true;
    const user1 = await Admin.findById(dataId.user.id);

    res.json({ success, user1 });

  } catch (error) {
    console.log("there is error in creating user", error);
  }
};





// login
export const loginUser = async (req, res) => {
  try {
    let success = false;
    const { email, password } = req.body;
    let user = await User.findOne({ email });
    if (!user) {
      success = false;
      return res
        .status(400)
        .json({ error: "please correct your login details!" });
    }
    let passwordCompare = await password=== user.password;
    if (!passwordCompare) {
      success = false;
      return res
        .status(400)
        .json({ success, error: "please correct your login details!" });
    }
    const dataId = {
      user: {
        id: user.id,
      },
    };
    const authToken = jwt.sign(dataId, JWT_SECRET);
    console.log(authToken);
    const user1 = await User.findById(dataId.user.id);

    success = true;
    res.json({ success, authToken, user1 });
  } catch (error) {
    console.log("there is an error while doing login", error);
  }
};





// Admin Login
export const adminLogin = async (req, res) => {
  try {
    let success = false;
    const { email, password } = req.body;
    let admin = await Admin.findOne({ email });
    if (!admin) {
      success = false;
      return res
        .status(400)
        .json({ error: "please correct your login details!" });
    }
    let passwordCompare = (await password) === admin.password;
    if (!passwordCompare) {
      success = false;
      return res
        .status(400)
        .json({ success, error: "please correct your login details!" });
    }
    const dataId = {
      admin: {
        id: admin.id,
      },
    };
    const authToken = jwt.sign(dataId, JWT_SECRET);
    console.log(authToken);
    const user1 = await Admin.findById(dataId.admin.id);

    success = true;
    res.json({ success, authToken, user1 });
  } catch (error) {
    console.log("there is an error while doing login", error);
  }
};
