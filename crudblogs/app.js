const express = require("express");
const app = express();
 
//middleware
app.use(express.json());
 
app.listen(3001, () => {
  console.log("Server is running on port 3001");
});
 
module.exports = app;


//adding the code to be dealing with Mongo DB and Mongoose

const mongoose = require("mongoose");
//configure mongoose
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/CRUD",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Connected to MongoDB");
    }
  }
);

const blogRouter = require("./routes/BlogRoutes");

app.use("/api/blogs", blogRouter);