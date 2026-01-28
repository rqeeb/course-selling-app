const { Router } = require("express");
const userRouter = Router();
const { userModel } = require("../db");
const jwt = require("jsonwebtoken");
const JWT_USER_PASSWORD = process.env.JWT_USER_PASSWORD;

userRouter.post("/signup", async (req, res) => {
  const { email, password, firstName, lastName } = req.body;
  //Hash Password here! - can use bcrypt/Hash256?

  try {
    await userModel.create({
      email: email,
      password: password,
      firstName: firstName,
      lastName: lastName,
    });

    res.status(200).json({
      message: "signup suceed",
    });
  } catch (e) {
    res.status(500).json({
      error: e.message || e,
    });
  }
});

userRouter.post("/signin", async (req, res) => {
  const { email, password } = req.body;

  //Password in DB is hashed but user provided NOT HASHED version - so UNHASH & compare.

  const userExists = await userModel.findOne({
    email: email,
    password: password,
  });

  if (userExists) {
    const token = jwt.sign(
      {
        id: userExists._id,
      },
      JWT_USER_PASSWORD,
    );
    res.status(200).json({
      token: token,
    });
  } else {
    res.status(403).json({
      message: "Invalid credentials",
    });
  }
});

userRouter.get("/purchases", (req, res) => {
  res.json({
    message: "signup endpoint",
  });
});

module.exports = {
  userRouter: userRouter,
};
