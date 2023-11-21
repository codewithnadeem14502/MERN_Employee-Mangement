import express from "express";
import { MONGODB_URL, PORT } from "./config.js";
import mongoose from "mongoose";
import cors from "cors";
import EmployeeRouter from "./routes/EmployeeRouter.js";
const app = express();

//middleware
app.use(express.json());
app.use(cors());

// router
app.use("/employee", EmployeeRouter);

mongoose
  .connect(MONGODB_URL)
  .then(console.log("DataBase is Connected "))
  .catch((error) => {
    console.log(error);
  });

app.get("/", (req, res) => {
  res.status(200).send({ message: "working" });
});

app.listen(PORT, () => {
  console.log(`server is working  on ${PORT} `);
});
