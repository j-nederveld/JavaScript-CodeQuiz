//check URL for parameters and get username && score
var urlParams = new URLSearchParams(window.location.search);
var userName = urlParams.get('username');
var score = urlParams.get('score');
let scoresList = document.getElementById("scores");
const clearClick = document.getElementById("clear");
const tryAgain = document.getElementById("try-again");

var storedScores = [];

tryAgain.addEventListener("click", (e) => {
    window.location = "https://j-nederveld.github.io/JavaScript-CodeQuiz/";
})


function setParams() {

    var field = 'username';
    var url = window.location.href;
    if(url.indexOf('?' + field + '=') === -1)
    return false

localStorage.setItem(JSON.stringify(userName), score);

clearClick.addEventListener("click", (e) => {
    localStorage.clear();
    window.location = window.location.href.split("?")[0];
})

//get key and value from local storage
for (i = 0; i < localStorage.length; i++) {
   var keyName = localStorage.key(i);
   var value = parseInt(localStorage.getItem(keyName));

var li = document.createElement("li");
li.textContent = "Username: " + JSON.parse(keyName) + " Score: " + value;
scoresList.appendChild(li);
    }

}

setParams();