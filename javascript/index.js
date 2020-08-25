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
  question.style.pointerEvents = "visible";
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
    question.innerHTML = `<div class="end-container">
                              <div class="score"> Score ${score} %</div>
                              <div class="btn btn3" id="btn3">Play again</div> 
                          </div>
                          `;
    nextBtn.style.display = "none";
  }
}

question.addEventListener("click", (e) => {
  if (e.target.className === "answer btn") {
    nextBtn.style.display = "block";
    document.getElementById("true").style.backgroundColor = "green";
    question.style.pointerEvents = "none";
    document.querySelectorAll("#false").forEach((element) => {
      element.style.backgroundColor = "red";
    });
  }
  if (e.target.id === "true") {
    score += 10;
    body.style.backgroundColor = "green";
  } else if (e.target.id === "false") {
    body.style.backgroundColor = "red";
  }
});

question.addEventListener("click", (e) => {
  if (e.target.id === "btn3") {
    const endContainer = document.querySelector(".end-container");
    endContainer.style.display = "none";
    startbtn.style.display = "block";
    header.style.display = "flex";
    counter = 1;
    score = 0;
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
    ques: "Which is the coldest planet?",
    answer: [
      { a: "Earth", correct: false },
      { b: "Neptune", correct: true },
      { c: "Saturn", correct: false },
      { d: "Venus", correct: false },
    ],
  },
  {
    ques: "Which planet is known as red planet?",
    answer: [
      { a: "Earth", correct: false },
      { b: "Mars", correct: true },
      { c: "Jupiter", correct: false },
      { d: "Venus", correct: false },
    ],
  },
  {
    ques: "Which planet is nearest to the sun?",
    answer: [
      { a: "Mercury", correct: true },
      { b: "Mars", correct: false },
      { c: "Neptune", correct: false },
      { d: "Venus", correct: false },
    ],
  },
  {
    ques: "How long does the earth takes to complete one rotation?",
    answer: [
      { a: "29 days", correct: false },
      { b: "365 days", correct: false },
      { c: "36 hours", correct: false },
      { d: "24 hours", correct: true },
    ],
  },
  {
    ques: "Which planet takes the longest time to revolve around the sun?",
    answer: [
      { a: "Earth", correct: false },
      { b: "Neptune", correct: true },
      { c: "Jupiter", correct: false },
      { d: "uranus", correct: false },
    ],
  },
  {
    ques: "Which planet has the highest number of sattelites?",
    answer: [
      { a: "Earth", correct: false },
      { b: "Saturn", correct: true },
      { c: "Jupiter", correct: false },
      { d: "Venus", correct: false },
    ],
  },
  {
    ques: "Which planet is known as ring planet?",
    answer: [
      { a: "Uranus", correct: false },
      { b: "Mars", correct: false },
      { c: "Saturn", correct: true },
      { d: "Neptune", correct: false },
    ],
  },
  {
    ques: "Which planet is known as home Planet?",
    answer: [
      { a: "Earth", correct: true },
      { b: "Mars", correct: false },
      { c: "neptune", correct: false },
      { d: "Venus", correct: false },
    ],
  },
];
