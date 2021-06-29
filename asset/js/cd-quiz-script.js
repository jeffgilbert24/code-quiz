//create variables
var startBtn = document.querySelector(".start");
var question = document.querySelector("#question");
var ans = document.querySelector("#answers");

// create buttons type answers
var Btn1 = document.createElement("button");
var Btn2 = document.createElement("button");
var Btn3 = document.createElement("button");
var Btn4 = document.createElement("button");

Btn1.classList.add("btn");
Btn2.classList.add("btn");
Btn3.classList.add("btn");
Btn4.classList.add("btn");

ans.appendChild(Btn1);
ans.appendChild(Btn2);
ans.appendChild(Btn3);
ans.appendChild(Btn4);

document.getElementById("#start").onclick = function(){
// create questions for quiz
var q1 = {
 quest: "What is used to denote a footer in HTML?",
 answer: {
     1: '<footer>',
     2: '<foot>',
     3: '<endofdocument>',
     4: '<eod>'
 }
};
var q2 = {
 quest:   "True or False, Java is short for JavaScript?",
 answer: {
     1: 'True',
     2: 'False'
 }
};
var q3 = {
    quest: "Which CSS property determines text-size",
    answer: {
        1: 'font-size',
        2: 'text-size',
        3: 'text-size',
        4: 'font-style'
    }
};
var q4 = {
    quest: "RGB in CSS stands for?",
    answer: {
        1:'random-gray-black',
        2: 'repeat-and-go-back',
        3: 'red-blue-green',
        4: 'run-generate-backup'

    }
};
var questions = [q1 , q2 , q3 , q4 ];
var randIdx = Math.floor(Math.random()*questions.length)
console.log("randIdx", randIdx) 
//Get random question
var randomQues = questions[randIdx];
console.log("randQues", randomQues);
//Display questions
var questLine = document.querySelector(".question")
console.log(questLine);
// start game
function startQuiz(){
    
}


//create list of possible answers
//check if answer is correct
//display right or wrong after the question is answered
//create timer
}