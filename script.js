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
      question: 'What is 2 + 2?',
      answers: [
        { text: '4', correct: true },
        { text: '15', correct: false },
        { text: '34', correct: false },
        { text: '22', correct: false }
      ]
    },
    {
        question: 'What are you?',
        answers: [
            { text: '4', correct: false },
            { text: '15', correct: false },
            { text: 'human', correct: true },
            { text: '22', correct: false }
        ]
      },
      {
        question: 'Yes',
        answers: [
          { text: 'no', correct: true },
          { text: '4', correct: false },
          { text: '15', correct: false },
          { text: 'sdfasdfasdfas', correct: false }
        ]
      },
    {
        question: '8 + 2?',
        answers: [
          { text: '4', correct: false },
          { text: '15', correct: false },
          { text: '10', correct: true },
          { text: '2asdfasdfasdfasdfsaf2', correct: false }
        ]
      }
];