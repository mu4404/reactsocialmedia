const mysql = require("mysql");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "asasaasa12!",
  database: "socialmedia",
});

module.exports = db;
