// const sqlite3 = require("sqlite3").verbose();

// const db = new sqlite3.Database("./pkgo.db", (err) => {
//   if (err) {
//     console.error(err.message);
//   }
//   console.log("Connected to the pkgo database.");

//   let sql = `SELECT pokemon FROM ref_pkdex WHERE generation=1;`;
//   let sql = `SELECT * FROM shiny WHERE lower(pokemon) IN (select lower(pokemon) FROM ref_pkdex where generation=1) AND user='purplecow#6485';`;

//   db.all(sql, [], (err, rows) => {
//     if (err) {
//       throw err;
//     }
//     rows.forEach((row) => {
//       console.log(row);
//     });
//   });

//   db.close((err) => {
//     if (err) {
//       console.error(err.message);
//     }
//     console.log("Close the database connection.");
//   });
// });

// module.exports = db;
