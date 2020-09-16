//check URL for parameters and get username && score
var urlParams = new URLSearchParams(window.location.search);
var userName = urlParams.get('username');
var score = urlParams.get('score');
let scoresList = document.getElementById("scores");
const clearClick = document.getElementById("clear");
const tryAgain = document.getElementById("try-again");

var todos = [];

tryAgain.addEventListener("click", (e) => {
    window.location = "https://j-nederveld.github.io/JavaScript-CodeQuiz";
})


function renderTodos() {
    
    // Render a new li for each todo
    for (var i = 0; i < todos.length; i++) {
      var todo = todos[i];
  
      var li = document.createElement("li");
      li.textContent = todo;
      li.setAttribute("data-index", i);
  
      var button = document.createElement("button");
      button.textContent = "Complete";
  
      li.appendChild(button);
      todoList.appendChild(li);
    }
  }

  function init() {
    // Write code here to check if there are todos in localStorage
    // If so, parse the value from localStorage and assign it to the todos variable
    let storedScores = JSON.parse(localStorage.getItem("ToDo"));
    if (storedScores !== null) {
      todos = storedScores;
    }
    renderTodos();
  }

  function storeTodos() {
    // Add code here to stringify the todos array and save it to the "todos" key in localStorage
    localStorage.setItem("ToDo", JSON.stringify(todos));
  }
  
    var todoText = todoInput.value.trim();
  
    // Return from function early if submitted todoText is blank
    if (todoText === "") {
      return;
    }
  
    // Add new todoText to todos array, clear the input
    todos.push(todoText);
    todoInput.value = "";
  
    // Store updated todos in localStorage, re-render the list
    storeTodos();
    renderTodos();
    init();
  


// function setParams() {

//     var field = 'username';
//     var url = window.location.href;
//     if(url.indexOf('?' + field + '=') === -1)
//     return false

// localStorage.setItem(JSON.stringify(userName), score);

// clearClick.addEventListener("click", (e) => {
//     localStorage.clear();
//     window.location = window.location.href.split("?")[0];
// })

// //get key and value from local storage
// for (i = 0; i < localStorage.length; i++) {
//    var keyName = localStorage.key(i);
//    var value = parseInt(localStorage.getItem(keyName));

// var li = document.createElement("li");
// let storedScores ="Username: " + JSON.parse(keyName) + " Score: " + value;
// todos = storedScores;
//     }

// }
// console.log(todos);
// setParams();