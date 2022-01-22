const StartBtn = document.querySelector(".start-btn")
const title = document.querySelector(".title")
const questionArray = [
{
    question: 'The condition in an if/ else statement is enclosed with ____.',
    options: [
        'quotes',
        'curly brackets',
        'paranthesis',
        'square brackets'
    ],
    answer: 'paranthesis'
},

{
    question: 'Arrays in JavaScript can be used to store ____.',
    options: [
        'numbers and strings',
        'other arrays',
        'booleans',
        'all of the above'
    ],
    answer: 'all of the above'
},

{
    question: 'In how many ways a JavaScript code can be involved in an HTML file?',
    options: [
        'inline',
        'external',
        'internal',
        'all of the above'
    ],
    answer: 'all of the above'
}
]

function remove(el) {
    var element = el;
    element.remove();
    displayQuestions() //CALL the displayQuestions function
}

const displayQuestions = function() {
    // which, for now, will just grab an element, console.log, and change it's text

var questionsElem = document.getElementById("questions") //store that HTML elemnt
questionsElem.textContent = (questionArray);
}


console.log(questionArray);




