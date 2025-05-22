import mysql from "mysql2/promise";

  const connection = await mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "123456",
    database: "games",
  });


export { connection };