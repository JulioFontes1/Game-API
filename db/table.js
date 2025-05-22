import { connection } from '../db/connection.js'

async function createTable() {

  const updatedTable = await connection.query(`CREATE TABLE IF NOT EXISTS mobile(
    game_id VARCHAR(36) NOT NULL,
    name VARCHAR(20) NOT NULL,
    price DECIMAL(11, 2) NOT NULL DEFAULT '0',
    date DATETIME DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (game_id)
    );`)

    return updatedTable
}


export  { createTable }