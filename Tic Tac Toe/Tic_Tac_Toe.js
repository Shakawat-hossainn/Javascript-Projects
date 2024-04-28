let boxes = document.querySelectorAll(".box");

let reset_btn = document.querySelector(".reset-btn");
let msg = document.querySelector(".msg");
let msgContainer = document.querySelector(".msg-container");
let newGamebtn = document.querySelector(".newBtn");
let hidden = document.querySelector("hide");
let turnO = true;

const winningPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

boxes.forEach((box)=>{
 box.addEventListener("click",()=>{
  for(let count=1;count<=9;count++){
    count = 0 + count;
    console.log(count)
  }
 })
})
const resetBtn = () => {
  for (let box of boxes) {
    turnO = true;
    enableBoxes();
    msgContainer.classList.add("hide");
  }
};

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turnO) {
      // turnO === true;
      box.innerHTML = "O";
      turnO = false;
    } else {
      box.innerHTML = "X";
      turnO = true;
    }

    box.disabled = true;
    checkWinner();
  });
});

const enableBoxes = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
};
const checkWinner = () => {
  for (let pattern of winningPatterns) {
    let posVal1 = boxes[pattern[0]].innerText;
    let posVal2 = boxes[pattern[1]].innerText;
    let posVal3 = boxes[pattern[2]].innerText;
    if (posVal1 != "" && posVal2 != "" && posVal3 != "") {
      if (posVal1 === posVal2 && posVal2 === posVal3) {
        console.log("Winner", posVal1);
        msgContainer.classList.remove("hide");
        msg.innerText = `Congratulations!Winner is ${posVal1} `;
        let disableBtns = () => {
          for (let box of boxes) {
            box.disabled = true;
          }
        };

        disableBtns();
        
        
        

        // boxes.forEach((box)=>{
        //   count++
        //   box.addEventListener("click",()=>{

        //     if(posVal1!==posVal2 && posVal2!==posVal3 && count===9){
        //       msg.innerText = "This game has been a DRAW"
        //       msgContainer.classList.remove("hide")

        // }})

        // console.log(count)

        // })
        for(let box of boxes){
          
         box.addEventListener("click",()=>{

        if(posVal1!==posVal2 && posVal2!==posVal3 && count===9){
             msg.innerText = "This game has been a DRAW"
             msgContainer.classList.remove("hide")
           

         }})

        
        }
      }
    }
  }
};
newGamebtn.addEventListener("click", resetBtn);
reset_btn.addEventListener("click", resetBtn);


// Couldn't Achieve the condition for a draw!
