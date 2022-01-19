var buttonEl = document.querySelector("#start-quiz")
var optionsEl = document.querySelector("#pick-an-option")

var nextQuestion = function() {
    var listItemEl = document.createElement("li");
    listItemEl.textContent = "next question";
    optionsEl.appendChild(listItemEl);
}

buttonEl.addEventListener("click", nextQuestion);
