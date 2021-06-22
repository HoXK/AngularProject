const request = require("http");
const express = require("express");
const app = express();
const mysql = require("mysql");
const bodyParser = require("body-parser");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "1234",
  database: "achieversit",
});

var server = app.listen(4200, function () {
  //   var host = server.address().address;
  var port = server.address().port;

  console.log("Example app listening at http://localhost:%s", port);
});

connection.connect((error) => {
  if (error) throw error;
});

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

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

app.get("/fetchUser", (req, res) => {
  let id = request.body.id;
  connection.query(
    `SELECT * FROM users where id=${id}`,
    (error, results, fields) => {
      if (error) throw error;
      res.end(JSON.stringify(results));
    }
  );
});

app.put("/updateUser", (req, res) => {
  let userData = request.body;
  connection.query(
    `UPDATE users SET name=${userData.name}, email=${userData.email}, address=${userData.address}, country=${userData.country}, phone=${userData.phone}  WHERE id=${id}`,
    (error, results, fields) => {
      if (error) throw error;
      res.end(JSON.stringify(results));
    }
  );
});
