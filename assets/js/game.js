const StartBtn = document.querySelector(".start-btn")
const quizContainer = document.querySelector(".quiz-container")
quizContainer.style.display = "none"
let currentQuestionIndex = 0;

var questionsElem = document.getElementById("question")
var optionOne = document.getElementById("option1")
var optionTwo = document.getElementById("option2")
var optionThree = document.getElementById("option3")
var optionFour = document.getElementById("option4")
optionOne.addEventListener("click", checkAnswer)
optionTwo.addEventListener("click", checkAnswer)
optionThree.addEventListener("click", checkAnswer)
optionFour.addEventListener("click", checkAnswer)
var timerObj;
var timerCount = 60;
var timerElement = document.getElementById("timer")
var progressElem = document.getElementById("progress")
var highScore = document.getElementById("user-initials")
var fullQuiz = document.querySelector(".full-quiz")
const questionArray = [
    {
        question: 'The condition in an if/ else statement is enclosed with ____.',
        options: [
            'quotes',
            'curly brackets',
            'paranthesis',
            'square brackets'
        ],
        answer: 2
    },
    
    {
        question: 'Arrays in JavaScript can be used to store ____.',
        options: [
            'numbers and strings',
            'other arrays',
            'booleans',
            'all of the above'
        ],
        answer: 3
    },
    
    {
        question: 'In how many ways a JavaScript code can be involved in an HTML file?',
        options: [
            'inline',
            'external',
            'internal',
            'all of the above'
        ],
        answer: 3
    }
]

function remove(el) {
    var element = el;
    element.remove();
    displayQuestions() //CALL the displayQuestions function
}
StartBtn.addEventListener("click", function () {
    StartBtn.style.display = "none"
    quizContainer.style.display = "block"
    timerObj = setInterval(function() {
    timerElement.textContent = "Time left: "+timerCount
    if (timerCount > 1) {
        timerCount --;
    } else {
        clearInterval(timerObj)
        quizContainer.style.display = "none"
        timerElement.textContent = "Time Up!"
    }
    },1000)
    displayQuestions()
})

function displayQuestions() {

    // which, for now, will just grab an element, console.log, and change it's text

    questionsElem.textContent = questionArray[currentQuestionIndex].question
    optionOne.textContent = questionArray[currentQuestionIndex].options[0]
    optionTwo.textContent = questionArray[currentQuestionIndex].options[1]
    optionThree.textContent = questionArray[currentQuestionIndex].options[2]
    optionFour.textContent = questionArray[currentQuestionIndex].options[3]
}

function checkAnswer () {
    var userAnswer = this.getAttribute("data-value")
    console.log(userAnswer)
    if (userAnswer != questionArray[currentQuestionIndex].answer) {
        timerCount  -= 10
        progressElem.textContent = "Wrong!" 
    }else{
        progressElem.textContent = "Correct!"    
    }
    if (currentQuestionIndex < questionArray.length-1){
        currentQuestionIndex ++;
        displayQuestions();
    } else {
        quizContainer.style.display = "none"
        timerElement.textContent = "Final Score: "+timerCount
        clearInterval(timerObj)
    }
}



console.log(questionArray);




