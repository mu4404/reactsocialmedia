const express = require("express");
const router = express.Router();

const db = require("../config/db");

router.post("/register", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  // db.query(
  //   "insert into users (username, password) values('test','password')",
  //   (err, result) => {
  //     res.send(result);
  //   }
  // );
  db.query(
    "insert into users (username,password) values (?, ?)",
    [username, password],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

module.exports = router;
