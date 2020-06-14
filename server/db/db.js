const sqlite3 = require("sqlite3").verbose();

let db = new sqlite3.Database("./pkgo.db", sqlite3.OPEN_READWRITE, (err) => {
  if (err) {
    console.error(err.message);
  }
  console.log("Connected to the pkgo database.");

  let sql = `SELECT pokemon FROM ref_pkdex WHERE generation=1;`;

  db.all(sql, [], (err, rows) => {
    if (err) {
      throw err;
    }
    rows.forEach((row) => {
      console.log(row);
    });
  });

  db.close((err) => {
    if (err) {
      console.error(err.message);
    }
    console.log("Close the database connection.");
  });
});

module.exports = db;
