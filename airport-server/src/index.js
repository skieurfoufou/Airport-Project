const express = require("express");
const cors = require("cors");
const app = express();
const morgan = require("morgan");

const env = require("./utils/env");
const db = require("./data-layer/db");
const flightRouter = require("./routes/flights.router");

// Middleware
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

// Routes
app.get("/", (req, res) => {
  res.json({ message: "Welcome to API Airport" });
});

// Routers
app.use("/flights", flightRouter);

app.listen(env.PORT, async () => {
  await db.connect();
  console.log(`Server is running on port ${env.PORT}.`);
});
