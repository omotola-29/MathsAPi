const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const numRoute = require("./router/num.routes");

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT ;

// Middleware
app.use(cors());
app.use(express.json());

app.use("/api/num", numRoute);

app.get("/", (req, res) => {
  res.send("Number Properties API is running!");
});

// Start the server
const server = app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
