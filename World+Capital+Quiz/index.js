import express from "express";
import bodyParser from "body-parser";
import cors from 'cors'

const app = express();
const port = 3000;

let quiz = [
  { country: "France", capital: "Paris" },
  { country: "United Kingdom", capital: "London" },
  { country: "United States of America", capital: "New York" },
];

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
