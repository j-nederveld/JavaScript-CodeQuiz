const startButton = document.querySelector("#start-btn");
const questionContainer = document.querySelector(".question");
const questionElement = document.querySelector("#question");
const anwswerButtonsContainer = document.querySelector("#answer-buttons");
const score = document.querySelector("#score");
const timeEl = document.querySelector("#timer");
const userName = document.querySelector("#username");
const correctAnswer = document.querySelector("#correct");
const incorrectAnswer = document.querySelector("#incorrect");
const submitScore = document.querySelector("#submit");
let scores = document.querySelector("#scores");
let userScore
let username

const questions = [
  {
    question: 'Which one is not equal?',
    answers: [
      { text: 'A.  x.notEqual(y);', correct: false },
      { text: 'B.  x != y', correct: true },
      { text: 'C.  x = x', correct: false },
      { text: 'D.  22', correct: false }
    ]
  },
  {
      question: 'Which one is equal?',
      answers: [
          { text: 'A.  4 === "4"', correct: false },
          { text: 'B.  something = nothing', correct: false },
          { text: 'C.  "4" === "4"', correct: true },
          { text: 'D.  maybe?', correct: false }
      ]
    },
    {
      question: 'Which of these can change?',
      answers: [
        { text: 'A.  b & d', correct: true },
        { text: 'B.  let', correct: false },
        { text: 'C.  const', correct: false },
        { text: 'D.  var', correct: false }
      ]
    },
    {
      question: 'When was javascript created?',
      answers: [
        { text: 'A.  1995', correct: true },
        { text: 'B.  1989', correct: false },
        { text: 'C.  1997', correct: false },
        { text: 'D.  2021', correct: false }
      ]
    },
    {
      question: 'What is at the beginning of a query string?',
      answers: [
        { text: 'A.  .', correct: false},
        { text: 'B.  &', correct: false },
        { text: 'C.  /', correct: false },
        { text: 'D.  ?', correct: true }
      ]
    },
  {
      question: '8 + 2?',
      answers: [
        { text: 'A.  4', correct: false },
        { text: 'B.  15', correct: false },
        { text: 'C.  10', correct: true },
        { text: 'D.  -12', correct: false }
      ]
    }
];


//globally declared variables for accessing in different quiz functions
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
      //if 0 seconds left, then stop
        if (0 === secondsLeft) {
            clearInterval(timerInterval);
        }

    }, 1000);
}

startButton.addEventListener("click", gameStart);

/*
intitialize timer, and show the question/answer containers
sets current question index to 0
 */
function gameStart() {
    startButton.style.display = "none";
    questionContainer.classList.remove("hide");
    anwswerButtonsContainer.classList.remove("hide");
    currentQuestionIndex = 0;
    nextQuestion();
    startTimer();
}

/*
call function to removePreviousAnswerOptions when next question is called.
displays question based on the currentQuestionIndex variable.

Runs game over function once user has answered each question.
 */
function nextQuestion() {
    removePreviousAnswerOptions();
    if (currentQuestionIndex === questions.length) {
        gameOver();
        return false;
    }
    showQuestion(questions[currentQuestionIndex])
}

/*
remove previous answer options before displaying the next set of options
 */
function removePreviousAnswerOptions() {
  while (anwswerButtonsContainer.firstChild) {
      anwswerButtonsContainer.removeChild(anwswerButtonsContainer.firstChild)
  }
}

// * Shows a question based on the current index.
function showQuestion(question) {
  questionElement.innerText = question.question;
  question.answers.forEach(answer => {
      let button = document.createElement("button")
      console.log(button);
      button.innerText = answer.text
      button.classList.add("btn-primary")
      if (answer.correct) {
          button.dataset.correct = answer.correct
      }
//subtract 10 seconds from timer for every incorrect answer
      button.addEventListener("click", () => {
          if (!answer.correct) {
              secondsLeft = secondsLeft - 10;
              incorrectAnswer.classList.remove("hide");
              correctAnswer.classList.add("hide");
              updateTimer();
          }
          else if (answer = correct) {
            incorrectAnswer.classList.add("hide");
              correctAnswer.classList.remove("hide");
          }
//increase question index by 1 for every guess
          currentQuestionIndex++
          nextQuestion()
      })
      anwswerButtonsContainer.appendChild(button);
  });
}

/*
  game over. runs when questions are completed or timer hits 0.
  hides question and answer containers
  sets userScore to the final timer value
  shows score/username input elements and allows user to submit their score
 */
function gameOver() {
  clearInterval(timerInterval);
  incorrectAnswer.classList.add("hide");
  correctAnswer.classList.add("hide");
  questionContainer.classList.add("hide");
  anwswerButtonsContainer.classList.add("hide");
  userScore = timeEl.innerText;
  console.log(userScore);
  score.classList.remove("hide");
  userName.classList.remove("hide");
  submitScore.classList.remove("hide");
  score.innerText = "Your score is " + userScore;
}

submitScore.addEventListener("click", function(event) {
  event.preventDefault();
  
  // create user object from submission
  let userNameInput = document.querySelector("#username");
  var username = userNameInput.value.trim();
  
  // validate the fields
  if (username === "") {
    displayMessage("error", "First name cannot be blank");
  } 
  //send data via query string to the highscores page
  var queryString = "username=" + username + "&score=" + userScore;
  window.location.href = "https://j-nederveld.github.io/JavaScript-CodeQuiz/scores/highscore.html?" + queryString;

  }
);