import express from "express";
import { createTable } from "./db/table.js";
import gameRouter from "./routers/gameRouters.js";
import dotenv from "dotenv";
import cors from 'cors';

import games from "./db/games.js";

const app = express();
dotenv.config();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.Router());
app.use(cors())

app.use("/", gameRouter);

async function main() {
  await createTable();
  console.log("Created table");
  // await games();
  console.log("Inserted datas");
  console.log("Server Started");
}

app.listen(process.env.PORT, main());
