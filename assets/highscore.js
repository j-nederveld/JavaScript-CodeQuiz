/*

  i know i did not need to use a query string to pass the values but i wanted to see if i could make it work, and i did!
  
 */


//check URL for parameters and get username && score
var urlParams = new URLSearchParams(window.location.search);
var userName = urlParams.get('username');
var score = urlParams.get('score');
//page element variables 
let scoresList = document.getElementById("scores");
const clearClick = document.getElementById("clear");
const tryAgain = document.getElementById("try-again");

//get date/timestamp to use as localstorage Key
var date = new Date();
var timestamp = date.getTime();

//access try again button to return user to the quiz
tryAgain.addEventListener("click", (e) => {
    window.location = "https://j-nederveld.github.io/JavaScript-CodeQuiz/";
})

//set parameters to local storage
function setParams() {

//check url for the query string, if it is not there then we will do nothing    
    var field = 'username';
    var url = window.location.href;
    if(url.indexOf('?' + field + '=') === -1) {
    return false;
}

//if query string does exist, set the timestamp as key and value equals username/score
localStorage.setItem(timestamp, "Username: " + JSON.stringify(userName) + " Score: " + score);
}
//call function
setParams();

//get existing parameters from local storage on page load (if they exist)
function getParams() {

//loop through local storage and get the key
for (i = 0; i < localStorage.length; i++) {
    var keyName = localStorage.key(i);
//get the value of our variable keyName
    var value = localStorage.getItem(keyName); 
//create li with the text content of our Key --> Value
    var li = document.createElement("li");
    li.textContent = value;
    scoresList.appendChild(li);
    }
//remove query string from URL
    window.history.pushState({}, document.title, "/" + "JavaScript-CodeQuiz/scores/highscore.html");
}

//add button option to clear local storage which also removes query string just in case it is still there for some reason
clearClick.addEventListener("click", (e) => {
    localStorage.clear();
    window.location = window.location.href.split("?")[0];
})



