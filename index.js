import express from "express";
import { createTable } from "./db/table.js";
import gameRouter from "./routers/gameRouters.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.Router());

app.use("/", gameRouter);

async function main() {
  await createTable();
  console.log("Server Started in 3000");
}

app.listen(3000, main());
