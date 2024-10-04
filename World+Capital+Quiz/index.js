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

let totalCorrect = 0;

// Middleware
app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(express.static("public"));

let currentQuestion = {};

// GET home page
app.get("/", (req, res) => {
  res.send(quiz);
});
app.post("/submit", (req, res) => {
  const input = req.body.input.trim();
})
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});


  // let currentQuestion = {};
  // app.get("/", async (req, res) => {
  //   totalCorrect = 0;
  //   await nextQuestion();
  //   console.log(currentQuestion);
  //   res.send(quiz)
  // });
  
  // // POST a new post
  // app.post("/submit", (req, res) => {
  //   let answer = req.body.answer.trim();
  //   let isCorrect = false;
  //   if (currentQuestion.capital.toLowerCase() === answer.toLowerCase()) {
  //     totalCorrect++;
  //     console.log(totalCorrect);
  //     isCorrect = true;
  //   }
  
  //   nextQuestion();
  //   res.render("index.ejs", {
  //     question: currentQuestion,
  //     wasCorrect: isCorrect,
  //     totalScore: totalCorrect,
  //   });
  // });
  
  // async function nextQuestion() {
  //   const randomCountry = quiz[Math.floor(Math.random() * quiz.length)];
  
  //   currentQuestion = randomCountry;
  // }
  