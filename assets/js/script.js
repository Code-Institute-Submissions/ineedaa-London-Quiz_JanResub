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
const submit = document.getElementById('submit');
const answers = document.querySelectorAll('.answer');
const next = document.getElementById('next');
const container = document.getElementsByClassName('container');

// Let the initial value of the question index and score is zero.
let questionIndex=0;
let score=0;

// Wait for the DOM to finish loading before running the game
// Get the button elements and add event listeners to them
window.addEventListener('DOMContentLoaded',loadQuestion);
submit.addEventListener('click',userOptedAnswer);
next.addEventListener('click',displayNextQuestion);

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
 */ 
function checkedAnswer(){
    let answer;
    answers.forEach(function(currentAnswer){
        if (currentAnswer.checked){
            answer = currentAnswer.id;
        }
    });
    return answer;  
}
/***
 * when user clicks one of the radio button,the submit button appears.
 */
showSubmitButton();
function showSubmitButton(){
    answers.forEach(function(currentAnswer){
        currentAnswer.addEventListener('change',function(){
            const submit = document.getElementById('submit');
            submit.classList.remove('hide');
    });
});
}
/**
 * when user clicks the submit button, the DOM gets the id of the element and compares with array of the quiz.
 */   
function userOptedAnswer(){
    const userAnswer = checkedAnswer();
    disableRadioButtons();
    evaluateAnswer(userAnswer);
}
/**
 * After user clicks submit button,the radio button is disabled to prevent user to click multiple times.
 */
function disableRadioButtons(){
    var radioButtons = document.getElementsByName("answer");
    for (var i = 0; i < radioButtons.length; i++) {
        if(radioButtons[i].checked){
            radioButtons[i].disabled= false;
        }else {
            radioButtons[i].disabled = true;
       }
    }
}
/**
 * When the user ,gets the next questions,all the radio buttons are activated,
 *  for the user to click for the next answer.
 */
function enableRadioButtons(){
    var radioButtons = document.getElementsByName("answer");
    for (var i = 0; i < radioButtons.length; i++) {
      radioButtons[i].disabled = false;
    }
}
/**
 * this function evaluates the answer given by the user and matches it with the array of answer.
 * @param {userAnswer} ,gets the user answer.
 */  
function evaluateAnswer(userAnswer){
    onSubmit();
    let correctAnswer = quiz[questionIndex].ans;
    if (correctAnswer === userAnswer){
        score++;
    }
    displayRightOptionGreen(correctAnswer);
    // if the user hits submit button at the end of tenth question,its displays the final result.
    if(questionIndex == (quiz.length - 1)){
        displayResult();
    }  
}
/**
 * This function displays the correct answer in green background,after user clicks their option.
 * @param {*} correctAnswer 
 */
 
function displayRightOptionGreen(correctAnswer) {
    if (correctAnswer === 'answer1') {
      document.getElementById("option1").classList.add("option-green");
    }
    else if (correctAnswer === 'answer2') {
      document.getElementById("option2").classList.add("option-green");
    }
    else if (correctAnswer === 'answer3') {
      document.getElementById("option3").classList.add("option-green");
    }
    else if (correctAnswer === 'answer4') {
      document.getElementById("option4").classList.add("option-green");
    }
}
 /**
  * This function reset the color to white.
  */
function resetAllOptionsColor() {
    document.getElementById("option1").classList.remove("option-green");
    document.getElementById("option2").classList.remove("option-green");
    document.getElementById("option3").classList.remove("option-green");
    document.getElementById("option4").classList.remove("option-green");
}

/**
 * when user clicks submit button ,the next button pops up.
 */
function onSubmit(){
    const next= document.getElementById('next');
    const submit = document.getElementById('submit');
    next.classList.remove('hide');
    submit.classList.add('hide');
}
    
// The next button creates an event listener to display the next question till ten questions.    
function displayNextQuestion(){
    questionIndex++;
    deselectAll();
    resetAllOptionsColor();
    enableRadioButtons();
    next.classList.add('hide');
    if(questionIndex < (quiz.length)){
        loadQuestion();
    }else{
        next.classList.add('hide');
    }
}
/**
 * deselects all the options selected for the previous question .
 */   
function deselectAll(){
    answers.forEach(function(currentAnswer){
        currentAnswer.checked=false;
    });
}
/**
 * displays the final result when user clicks the final submit button at tenth question.
 */
function displayResult(){
    document.querySelector('.container').classList.add('hide');
    document.querySelector('#game-over').classList.remove('hide');
    document.getElementById('total-score').innerHTML=`<span> Total Score:
    ${score}/10</span>`;
    document.getElementById('play-again').addEventListener('click',function(){
        location.reload();   
    }); 
}