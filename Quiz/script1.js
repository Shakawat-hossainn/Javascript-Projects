let questionEl = document.querySelector(".question");
//question = ""
let options = document.querySelectorAll(".options");
let subBtn = document.querySelector(".btn");
let cont = document.querySelector(".container")
const quizData = [
  {
    question: "Which of the following is a client site language?",

    options: ["Java", "C", "Python", "JavaScript"],
    correct: 1,
  },
  {
    question: "What does CSS stand for?",

    options: [
      "Hypertext Markup Language",
      "Cascading Style Sheet",
      "Jason Object Notation",
      "Helicopters Terminals Motorboats Lamborginis",
    ],
    correct: 0,
  },
  {
    question: "What year was JavaScript launched?",

    options: ["1996", "1995", "1994", "none of the above"],
    correct: 3,
  },
];
let currQuiz = 0;
let score = 0;
let question;
// let [answerEl,option1,option2,option3,option4] = document.querySelector(".answer","#option-1","#option-2","#option-3","#option-4")
let answerEl = document.querySelectorAll(".answer");
let option1 = document.querySelector("#option-1");
let option2 = document.querySelector("#option-2 ");
let option3 = document.querySelector("#option-3");
let option4 = document.querySelector("#option-4");
let lis = document.querySelectorAll("li");
//console.log(quizData[currQuiz].options)

loadQuiz = (e) => {
  let question = quizData[currQuiz].question;
  questionEl.innerText = question;
  lis.forEach((li, index) => {
    let label = li.querySelector("label");
    // console.log(label.innerText)
    label.innerText = quizData[currQuiz].options[index];
  });
};

loadQuiz();

// lis.forEach((li,index) => {
//   li.addEventListener("click",(e) => {
//     e.stopPropagation()
//    // console.log(index)
//    console.log(quizData[currQuiz].correct)
//    if ( quizData[currQuiz].correct == index) {
//     score++
//    // console.log(score)
// e.stopPropagation();
//    }

//   }
//   )

// }
// )
const getSelect = () => {
  let ans_ind;
  answerEl.forEach((currAns, index) => {
    if (currAns.checked) {
      ans_ind = index;
    }
  });
  return ans_ind;
};
const deselectOption = () => {
  answerEl.forEach((currAns) => {
    return (currAns.checked = false);
  });
};

subBtn.addEventListener("click", (e) => {
  let selectedOption = getSelect();
  //console.log(selectedOption);
  if (selectedOption === quizData[currQuiz].correct) {
    score = score + 1;
    console.log(score);
  }
  currQuiz++;
  if (currQuiz < quizData.length) {
    deselectOption();
    loadQuiz();
  }else{
    cont.innerHTML = `    <div  class="score">
    <h2 style="text-align: center;">Your Score ${score}/${quizData.length}

    </h2>
    <br> 
    <div class="congo" style="text-align: center;">Congratulations on completing the game!😊</div>
</div>

`
  }
});
