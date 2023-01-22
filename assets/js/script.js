
// The array of questions for the game. 
const quiz = [
    {
        question: "Q1:What is the airport code for London Heathrow?",
        a: "LHR",
        b: "HTR",
        c: "LTR",
        d: "HLR",
        ans: "answer1"
    },
    {
        question: "Q2:If Big Ben is the bell, what is the name of the tower?",
        a: "London Tower",
        b: "Big Ben Tower",
        c: "Elizabeth Tower",
        d: "Birmingham Tower",
        ans: "answer3"
    },
    {
        question: "Q3:St Paul Cathedral was the tallest building in London until which decade?",
        a: "1970",
        b: "1980",
        c: "1960",
        d: "1950",
        ans: "answer3"

    },
    {
        question: "Q4:Which sport is played at Lords?",
        a: "Cricket",
        b: "Rugby",
        c: "Football",
        d: "Tennis",
        ans: "answer1"

    },
    {
        question: "Q5:How many people died in the Great Fire of London?",
        a: "8",
        b: "60",
        c: "6",
        d: "10",
        ans: "answer3"
    },
    {
        question: "Q6:Which London Underground station is named after a football team?",
        a: "Chelsea",
        b: "Arsenal",
        c: "Liverpool",
        d: "Manchester United",
        ans: "answer2"
    },
    {
        question: "Q7:How many ravens are there in the Tower of London? ",
        a: "4",
        b: "5",
        c: "8",
        d: "7",
        ans: "answer4"
    },
    {
        question: "Q8:Which country donates the Trafalgar Square Christmas tree each year as a thanks for British efforts in WWII?",
        a: "Sweden",
        b: "France",
        c: "Norway",
        d: "Italy",
        ans: "answer3"
    },
    {
        question: "Q9:In which London park will you find a private pet cemetery?",
        a: "Hyde park",
        b: "Green Park",
        c: "Victoria Park",
        d: "Richmond Park",
        ans: "answer1"
    },
    {
        question: "Q10:In which year did the Thames Barrier open?",
        a: "1982",
        b: "1978",
        c: "1967",
        d: "1976",
        ans: "answer1" 
    }   
];
// The elements of the array are saved as constants.
const question = document.getElementById('question');
const option1 = document.getElementById('option1');
const option2 = document.getElementById('option2');
const option3 = document.getElementById('option3');
const option4 = document.getElementById('option4');
const answers = document.querySelectorAll('.answer');
const scoreArea = document.getElementById('scoreArea');
const next = document.getElementById('next');
const container = document.getElementsByClassName('container')[0];

// Let the initial value of the question index and score is zero.
let questionIndex=0;
let score=0;

// Wait for the DOM to finish loading before running the game
// Get the button elements and add event listeners to them
window.addEventListener('DOMContentLoaded',loadQuestion);


/**
  *creates a function that gives the values of the array into the elements of html.
  */
  function loadQuestion(){
    let questionList= quiz[questionIndex];
    question.innerText=questionList.question;
    option1.innerText=questionList.a;
    option2.innerText=questionList.b;
    option3.innerText=questionList.c;
    option4.innerText=questionList.d;  
}
 


/**
 * gets the value of the answer user clicked
 * @returns the id of the element user opted.
 **/
function checkedAnswer(){
    let answer;
    answers.forEach(function(currentAnswer){
        if (currentAnswer.checked){
            answer = currentAnswer.id;
        }
    });
    return answer;
}


/**
 * this function evaluates the answer given by the user and matches it with the array of answer.
 * @param {*} userAnswer 
 **/
function evaluateAnswer(answer){
    
    let correctAnswer = quiz[questionIndex].ans;
    if (correctAnswer === answer){
        score++;
        const scoreArea = document.getElementById('scoreArea');
        scoreArea.classList.remove('hide');
        
    }else if (answer !== correctAnswer){
        scoreArea.classList.remove('hide');
        
    }
    }
// if the user hits submit button at the end of tenth question,its displays the final result.
    if(questionIndex == (quiz.length - 1)){
        displayResult();
    }


/**
 * when user clicks submit button ,the next button pops up.
 **/

    
// The next button creates an event listener to display the next question till ten questions.    
function displayNextQuestion(){
    questionIndex++;
    deselectAll();
    
    if(questionIndex < (quiz.length)){
        loadQuestion();
    }
    }

/**
 * deselects all the options selected for the previous question .
 **/  
function deselectAll(){
    answers.forEach(function(currentAnswer){
        currentAnswer.checked=false;
    });
}
/**
 * displays the final result when user clicks the final submit button at tenth question.
 **/
function displayResult(){
    if(score == 10){
        container.innerHTML=`
        <h3>Congratulations!!!<i class="fa fa-smile-o" aria-hidden="true"></i></h3>
        <h4>You Scored ${score}/10</h4>`;
    }else{
        container.innerHTML=`
        <h3>Better Luck Next Time!!!<i class="fa fa-frown-o" aria-hidden="true"></i></h3>
        <h4>Your Total Score= ${score}/10</h4>`;
    }
}