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
        a: "19670",
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
   const question = document.getElementById('question');
   const option1 = document.getElementById('option1');
   const option2 = document.getElementById('option2');
   const option3 = document.getElementById('option3');
   const option4 = document.getElementById('option4');
   const submit = document.getElementById('submit');
   const answers = document.querySelectorAll('.answer');
   const scoreArea = document.getElementById('score-area');

   let questionIndex=0;
   let score=0;

   function loadQuestion(){
          let questionList= quiz[questionIndex];
          question.innerText=questionList.question;
          option1.innerText=questionList.a;
          option2.innerText=questionList.b;
          option3.innerText=questionList.c;
          option4.innerText=questionList.d;
   }

   loadQuestion();

   function checkedAnswer(){
    let answer;
     answers.forEach(function(currentAnswer){
        if (currentAnswer.checked){
          answer = currentAnswer.id;
        }
     });
     return answer;
 }
 submit.addEventListener('click',function(){
    const userAnswer = checkedAnswer();
    console.log(userAnswer);
    evaluateAnswer();
 });
    function evaluateAnswer(){
        let correctAnswer = quiz[questionIndex].ans;
        if (correctAnswer === userAnswer){
            score++;
            scoreArea.classList.remove('hide');
            scoreArea.innerHTML=`
            <p> Correct Answer !!!</p>
            <p> You Scored ${score}/10 </p>`;
        }else if (userAnswer !== correctAnswer){
            scoreArea.classList.remove('hide');
            scoreArea.innerHTML=`
            <p> Incorrect Answer !!!</p>
            <p> You Scored ${score} /10</p>`;
        }else {
            console.log('user not clicked!!');
        }
     };
   

