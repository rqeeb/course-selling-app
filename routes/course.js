const { Router } = require("express");
const courseRouter = Router();


function createCourseRoutes(app) {
  courseRouter.post("/course/purchase", (req, res) => {

  });

  courseRouter.get("/course/preview", (req, res) => {

  });
}

module.export ={
    courseRouter: courseRouter,
}
