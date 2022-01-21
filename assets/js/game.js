const StartBtn = document.querySelector(".start-btn")
const title = document.querySelector(".title")

function remove(el) {
    var element = el;
    element.remove();
}

const displayQuestions = function() {
    questions.innerHTML = "";
    options.innerHTML = "";
    quizContainer.appendChild(questions);
}

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

console.log(questionArray);




