const { Router } = require("express");
const userRouter = Router();


  userRouter.post("/user/signup", (req, res) => {
    res.json({
      message: "signup endpoint",
    });
  });

  userRouter.post("/user/signin", (req, res) => {
    res.json({
      message: "signin endpoint",
    });
  });

  userRouter.get("/user/purchases", (req, res) => {
    
  });

 

module.export = {
    userRouter: userRouter,
};
