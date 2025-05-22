import { connection } from '../db/connection.js'

async function createTable() {

  const updatedTable = await connection.query(`CREATE TABLE IF NOT EXISTS tb_game(
    id VARCHAR(256) NOT NULL,
    title VARCHAR(256) NOT NULL,
    game_year INT NOT NULL,
    genre VARCHAR(256) NOT NULL, 
    platforms VARCHAR(256) NOT NULL,
    score DECIMAL(6, 2) NOT NULL,
    img_url VARCHAR(256) NOT NULL,
    short_description TEXT NOT NULL,
    long_description TEXT NOT NULL,
    PRIMARY KEY (id)
    );`)

    return updatedTable
}


export  { createTable }