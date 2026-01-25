const { Router } = require("express");
const userRouter = Router();
const userModel = require("../db");

userRouter.post("/signup", async (req, res) => {
  const { email, password, firstName, lastName } = req.body;
  //Hash Password here!

  try {
    await userModel.create({
      email: email,
      password: password,
      firstName: firstName,
      lastName: lastName,
    });

    res.json({
      message: "signup suceed",
    });
  } catch (e) {
    res.status(500).json({
      error: e.message || e,
    });
  }
});

userRouter.post("/signin", (req, res) => {
  res.json({
    message: "signin endpoint",
  });
});

userRouter.get("/purchases", (req, res) => {
  res.json({
    message: "signup endpoint",
  });
});

module.exports = {
  userRouter: userRouter,
};
