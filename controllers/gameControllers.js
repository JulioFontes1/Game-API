import { connection } from "../db/connection.js";
import { randomUUID } from "crypto";

async function getAllGames(req, res) {
  try {
    const [results, fields] = await connection.query("SELECT * FROM `tb_game`;");

    res.status(200).send(results);
  } catch (error) {
    console.log(error);
  }
}

async function cadasterGame(req, res) {
  const { name, price } = req.body;

  const sql = "INSERT INTO mobile(game_id, name, price) VALUES (?,?,?);";
  const values = [randomUUID(), name, price];

  await connection.query(sql, values);

  res.status(201).json({ msg: "Game cadastrado" })
}

export { getAllGames, cadasterGame };
