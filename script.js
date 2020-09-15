const startButton = document.querySelector("#start-btn");
const questionContainer = document.querySelector(".question");
const questionElement = document.querySelector("#question");
const anwswerButtonsContainer = document.querySelector("#answer-buttons");
const score = document.querySelector("#score");
const timeEl = document.querySelector("#timer");
const userName = document.querySelector("#username");
const submitScore = document.querySelector("#submit");
let scores = document.querySelector("#scores");
let userScore
let username

const questions = [
  {
    question: 'Which one is not equal?',
    answers: [
      { text: 'x.notEqual(y);', correct: false },
      { text: 'x != y', correct: true },
      { text: 'x = x', correct: false },
      { text: '22', correct: false }
    ]
  },
  {
      question: 'Which one is equal?',
      answers: [
          { text: '4 === "4"', correct: false },
          { text: 'something = nothing', correct: false },
          { text: '"4" === "4"', correct: true },
          { text: 'maybe?', correct: false }
      ]
    },
    {
      question: 'Which of these can change?',
      answers: [
        { text: 'b & d', correct: true },
        { text: 'let', correct: false },
        { text: 'const', correct: false },
        { text: 'var', correct: false }
      ]
    },
    {
      question: 'When was javascript created?',
      answers: [
        { text: '1995', correct: true },
        { text: '1989', correct: false },
        { text: '1997', correct: false },
        { text: '2021', correct: false }
      ]
    },
  {
      question: '8 + 2?',
      answers: [
        { text: '4', correct: false },
        { text: '15', correct: false },
        { text: '10', correct: true },
        { text: '-12', correct: false }
      ]
    }
];

//commited up to here

let currentQuestionIndex
let secondsLeft = 100;
let timerInterval;

function updateTimer() {
    timeEl.textContent = secondsLeft;
    if (secondsLeft === 0) {
      gameOver();
    }
}

function startTimer() {
    timerInterval = setInterval(function() {
        secondsLeft--;
        updateTimer();

        if (0 === secondsLeft) {
            clearInterval(timerInterval);
        }

    }, 1000);
}

startButton.addEventListener("click", gameStart);

function gameStart() {
    startButton.style.display = "none";
    questionContainer.classList.remove("hide");
    anwswerButtonsContainer.classList.remove("hide");
    currentQuestionIndex = 0;
    nextQuestion();
    startTimer();
}

function nextQuestion() {
    removePreviousAnswerOptions();
    if (currentQuestionIndex === questions.length) {
        gameOver();
        return false;
    }
    showQuestion(questions[currentQuestionIndex])
}