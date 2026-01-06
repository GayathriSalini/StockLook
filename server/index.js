const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const cookieParser = require("cookie-parser");
require("dotenv").config();

const authRoute = require("./routes/AuthRoute");

const app = express();
const { MONGO_URL, PORT } = process.env;


app.use(express.json());
app.use(cookieParser());

app.use(
  cors({
    origin: ["http://localhost:3000", "http://localhost:3001"],
    credentials: true,
  })
);

/* Routes AFTER middleware */
app.use("/auth", authRoute);

// DB
mongoose
  .connect(MONGO_URL)
  .then(() => console.log("MongoDB connected successfully"))
  .catch(console.error);

// Server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
