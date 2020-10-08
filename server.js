const express = require("express");
const app = express();
const PORT = process.env.PORT || 8080;
const path = require("path");

const mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "rootroot",
  database: "schools_db",
});

connection.connect(function (err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId + "\n");
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Static directory
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./public/index.html"));
});

app.get("/form", (req, res) => {
  res.sendFile(path.join(__dirname, "./public/form.html"));
});

app.listen(PORT, () => {
  console.log(`Server listening at localhost:${PORT}`);
});

// console.log(
//   connection.query(`SELECT schoolName FROM schools`, function (err, res) {
//     if (err) throw err;
//     console.log(res);
//   })
// );
