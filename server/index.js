const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

// const db = require("./db/db.js");
const app = express();

const PORT = process.env.PORT || 8080;

// Database Initialization
const sqlite3 = require("sqlite3").verbose();

const db = new sqlite3.Database("./db/pkgo.db", (err) => {
  if (err) {
    console.error(err.message);
  }
  console.log("Connected to the pkgo database.");
});

// logging middleware
app.use(morgan("dev"));

// body parsing middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// error handling
app.use((err, req, res, next) => {
  console.error(err);
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || "Internal server error.");
});

app.get("/api/pokemon", cors(), (req, res, next) => {
  let sql = `SELECT pokemon FROM ref_pkdex WHERE generation=1;`;
  // let sql = `SELECT * FROM shiny WHERE lower(pokemon) IN (select lower(pokemon) FROM ref_pkdex where generation=1) AND user='purplecow#6485';`;

  db.all(sql, [], (err, rows) => {
    if (err) {
      throw err;
    }

    res.json({
      message: "success",
      data: rows,
    });
  });
});

app.listen(PORT, () => {
  console.log(`This is Major Tom to localhost ${PORT}...`);
});
