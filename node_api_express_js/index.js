const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;
const { request } = require("http");

app.get("/user", (req, res) => {
  connection.query("SELECT * FROM users", (error, results, fields) => {
    if (error) throw error;
    res.end(JSON.stringify(results));
  });
});

app.post("/createUser", (req, res) => {
  let postData = request.body;
  connection.query(
    "INSERT INTO users SET ?",
    postData,
    (error, results, fields) => {
      if (error) throw error;
      res.end(JSON.stringify(results));
    }
  );
});

app.post("/deleteUser", (req, res) => {
  let id = request.body;
  connection.query(
    `DELETE FROM users WHERE id=${id}`,
    (error, results, fields) => {
      if (error) throw error;
      res.end(JSON.stringify(results));
    }
  );
});
