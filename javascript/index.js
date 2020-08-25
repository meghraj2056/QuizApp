const startbtn = document.querySelector(".btn1");
const questionInner = document.querySelector(".question");
const answer = document.querySelector(".answers");
const header = document.querySelector(".header");
const question = document.querySelector(".question-container");
const nextBtn = document.querySelector(".btn2");
const body = document.querySelector("body");

nextBtn.addEventListener("click", nextQuestion);
startbtn.addEventListener("click", startQuiz);

function startQuiz() {
  question.style.display = "flex";
  startbtn.style.display = "none";
  header.style.display = "none";
  showQuestion(0);
}

let score = 0;
let counter = 1;
function nextQuestion() {
  showQuestion(counter);
  counter++;
  nextBtn.style.display = "none";
  body.style.backgroundColor = "white";
}

function showQuestion(index) {
  if (index < questionArray.length) {
    let html = "";
    html = `
            <div class="question"> ${questionArray[index].ques} 
            </div>
              <div class="answers">
                  <div class="answer btn" id="${questionArray[index].answer[0].correct}"> 
                  ${questionArray[index].answer[0].a}
                  </div>

                  <div class="answer btn" id="${questionArray[index].answer[1].correct}"> 
                  ${questionArray[index].answer[1].b}
                   </div
                   >
                  <div class="answer btn" id="${questionArray[index].answer[2].correct}"> 
                  ${questionArray[index].answer[2].c}
                   </div
                   >
                  <div class="answer btn" id="${questionArray[index].answer[3].correct}"> 
                  ${questionArray[index].answer[3].d}
                   </div
                   >
            </div>
    `;
    question.innerHTML = html;
  } else {
    question.innerHTML = `score ${score}`;
    nextBtn.style.display = "none";
  }
}

question.addEventListener("click", (e) => {
  if (e.target.className === "answer btn") {
    const options = document.querySelector(".answers");

    nextBtn.style.display = "block";
    options.style.cursor = "default";
  }
  if (e.target.id === "true") {
    score += 10;
    body.style.backgroundColor = "green";
  } else {
    body.style.backgroundColor = "red";
  }
});

const questionArray = [
  {
    ques: "Which is the Largest Planet?",
    answer: [
      { a: "Earth", correct: false },
      { b: "Mars", correct: false },
      { c: "Jupiter", correct: true },
      { d: "Venus", correct: false },
    ],
  },
  {
    ques: "Which Planet is Known as Evening star?",
    answer: [
      { a: "Earth", correct: false },
      { b: "Mars", correct: false },
      { c: "Jupiter", correct: false },
      { d: "Venus", correct: true },
    ],
  },
  {
    ques: "what is your job?",
    answer: [
      { a: "meghraj", correct: true },
      { b: "ram", correct: false },
      { c: "ram", correct: false },
      { d: "ram", correct: false },
    ],
  },
  {
    ques: "what is your salary?",
    answer: [
      { a: "meghraj", correct: true },
      { b: "ram", correct: false },
      { c: "ram", correct: false },
      { d: "ram", correct: false },
    ],
  },
];
