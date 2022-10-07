import dotenv from "dotenv";

import dbconnection from "./config/dbconnection.js";
import app from "./app.js";

dotenv.config();

const protocol = process.env.PROTOCOL || "http";
const host = process.env.HOST || "localhost";
const port = process.env.PORT || 3000;

try {
  await dbconnection.sync(); // { force: true }, { alter: true }
  console.log("Connection has been established successfully.");
} catch (error) {
  console.error("Unable to connect to the database:", error);
}

app.listen(
  port,
  console.log(`Server is running on ${protocol}://${host}:${port}`)
);
