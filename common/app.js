const mysql = require("mysql2");
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Manoj@#$234",
  database: "college",
});
connection.connect(async function (err) {
  if (err) {
    console.log(err);
  }
  console.log("database connection established");
  const query = "select * from todos";
  connection.query(query, (err, result) => {
    if (err) {
      console.log(err);
    }
    console.log(result);
  });
});
