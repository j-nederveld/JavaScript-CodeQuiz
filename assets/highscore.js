//check URL for parameters and get username && score
var urlParams = new URLSearchParams(window.location.search);
var userName = urlParams.get('username');
var score = urlParams.get('score');
let scoresList = document.getElementById("scores");
const clearClick = document.getElementById("clear");
const tryAgain = document.getElementById("try-again");

var storedScores = [];

var date = new Date();
var timestamp = date.getTime();
console.log(timestamp);

tryAgain.addEventListener("click", (e) => {
    window.location = "https://j-nederveld.github.io/JavaScript-CodeQuiz/";
})

location.reload(window.location = "https://j-nederveld.github.io/JavaScript-CodeQuiz/scores/highscore.html");

function setParams(e) {
e.preventDefault();
localStorage.setItem(timestamp, "Username: " + JSON.stringify(userName) + " Score: " + score);

clearClick.addEventListener("click", (e) => {
    localStorage.clear();
    window.location = window.location.href.split("?")[0];
})

//get key and value from local storage
for (i = 0; i < localStorage.length; i++) {
   var keyName = localStorage.key(i);
   var value = localStorage.getItem(keyName);
   console.log(value);

var li = document.createElement("li");
li.textContent = value;
scoresList.appendChild(li);
    }

}

setParams();