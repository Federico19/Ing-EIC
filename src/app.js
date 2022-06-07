import express from "express";
import { v4 } from "uuid";
import {sum} from "./operation.js";

const app = express();

// Routes
app.get("/", (req, res) => {
  const result = sum(2,2);
  res.send(`2 y 2 son ${result}`);
});

export default app;
