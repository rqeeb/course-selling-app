const { Router } = require("express");
const adminRouter = Router();
const { adminModel } = require("../db.js");
const jwt = require("jsonwebtoken");
const JWT_ADMIN_PASSWORD = process.env.JWT_ADMIN_PASSWORD;

adminRouter.post("/signup", async (req, res) => {
  const { email, password, firstName, lastName } = req.body;
  //Hash Password here!: No need [Admin Panel]

  try {
    await adminModel.create({
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

adminRouter.post("/signin", async (req, res) => {
  const { email, password } = req.body;

  //Password in DB is hashed but user provided NOT HASHED version - so UNHASH & compare.

  const adminExists = await adminModel.findOne({
    email: email,
    password: password,
  });

  if (adminExists) {
    const token = jwt.sign(
      {
        id: adminExists._id,
      },
      JWT_ADMIN_PASSWORD,
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

adminRouter.post("/course", (req, res) => {
  res.json({
    message: "signin endpoint",
  });
});

adminRouter.put("/course", (req, res) => {
  res.json({
    message: "signin endpoint",
  });
});

module.exports = {
  adminRouter: adminRouter,
};
