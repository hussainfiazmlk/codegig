import express from "express";

import gigRoutes from "./routes/gigRoutes.js";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome to API Development");
});

app.use("/api/v1/gigs", gigRoutes);

export default app;
