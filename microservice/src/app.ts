import express from "express";
import cors from "cors";
import { connectDb } from "./config/database";
import router from "./routers";

const app = express();
app.use(express.json());
app.use(cors());
app.use(router);

export function init() {
  connectDb();
  return Promise.resolve(app);
}

export default app;
