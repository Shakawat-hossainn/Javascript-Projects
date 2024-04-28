let questionEl = document.querySelector(".question");
//question = ""
//let options = document.querySelectorAll(".options")
let subBtn = document.querySelector(".btn");


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

// let [answerEl,option1,option2,option3,option4] = document.querySelector(".answer","#option-1","#option-2","#option-3","#option-4")
let answerEl = document.querySelector(".answer");
let option1 = document.querySelector("#option-1");
let option2 = document.querySelector("#option-2 ");
let option3 = document.querySelector("#option-3");
let option4 = document.querySelector("#option-4");
let lis = document.querySelectorAll("li");

loadQuiz = () => {
  let { question, options } = quizData[currQuiz];

  questionEl.innerText = question;
  options.forEach((option, index) => {
    //(window[`option${index+1}`].innerText=option)

    // let optionElement = document.querySelector(`#option-${index + 1}`);
    // optionElement.innerText = option; // Set the inner text directly

    //`#option-[${index+1}]`.innerText= `options[${index}]`
    lis.forEach((li, index) => {
      
      let options = quizData[currQuiz];
      console.log(quizData[options])
     
      li.querySelector('label').innerText = options[index];
    });
  });
};

loadQuiz();

subBtn.addEventListener("click", () => {
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
  }
});
