import express from "express";
import bodyParser from "body-parser";
import cors from 'cors'
import pg from 'pg';

const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "world",
  password: "wisdom6715!!@",
  port: 5432,
})
db.connect();

const app = express();
const port = 3000;

let quiz = [
  { country: "France", capital: "Paris" },
  { country: "United Kingdom", capital: "London" },
  { country: "United States of America", capital: "New York" },
];
// connecting postgres
db.query('SELECT * FROM capitals', (err, res) => {
  if (err) {
    console.error('Error connecting to the database:', err.stack);
  } else {
    quiz = res.rows;
    // console.log('Connected to the database:', res.rows);
  }
  db.end(); // close the connection
});

// Middleware
app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(express.static("public"));

app.get("/", (req, res) => {
  res.send(quiz);
});
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
