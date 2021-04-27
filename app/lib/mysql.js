// Dependencies
var mysql = require("mysql2");

// MySQL Pool Connection
var pool = mysql.createPool({
  port: 3306,
  host: "localhost",
  user: "root",
  password: "password",
  database: "employee_db",
});

module.exports = pool;
