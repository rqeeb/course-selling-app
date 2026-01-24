const express = require("express");
const app = express();
const {createUserRoutes} = require("./routes/user.js");
const {createCourseRoutes} = require("./routes/course.js");

app.use("/user",userRouter)
app.use("/course",courseRouter)


app.listen(2346);