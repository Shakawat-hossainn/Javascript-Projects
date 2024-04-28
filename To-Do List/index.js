let add = document.querySelector(".text");
let btn = document.querySelector(".btn");
let li = document.getElementsByTagName("li");
let ul = document.getElementsByTagName("ul");
let list = document.querySelector(".list");

btn.addEventListener("click", (e) => {
  console.log(add.value);
  let li = document.createElement("li");
  li.innerHTML = add.value;
  document.getElementsByTagName("ul")[0].appendChild(li);

  add.value = "";
});

for (let i = 0; i < ul.length; i++) {
  ul[i].addEventListener("click", (e) => {
    if ((e.target.tagName = "LI")) {
      let clickedLi = e.target; // Get the clicked <li> element
     
    
        
     
      
      clickedLi.style.textDecoration = "line-through";
      let span = document.createElement("span");
      span.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#ff0000" fill="none">
     <path d="M17 3.33782C15.5291 2.48697 13.8214 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 11.3151 21.9311 10.6462 21.8 10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
     <path d="M8 12.5C8 12.5 9.5 12.5 11.5 16C11.5 16 17.0588 6.83333 22 5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
 </svg>`;
 
      //  if (e.target==="LI") {

      //  } else {

      //  }

      clickedLi.insertBefore(span, clickedLi.firstChild);
      function handleremoveLogic(){

        e.target.classList.toggle("remove")
        if (e.target.className === "remove") {
          clickedLi.style.textDecoration = "";
     // clickedLi.removeChild(clickedLi.firstChild);
     clickedLi.removeChild(clickedLi.firstChild);
          
        }
      }
      handleremoveLogic();
    }
  });
}




// function clickedAg() {
//   if (clickedLi.style.textDecoration === "line-through") {
//     clickedLi.style.textDecoration = "";
//     clickedLi.removeChild(clickedLi.firstChild);
//   } else {
//     clickedLi.style.textDecoration === "line-through";
//   }
// }
// clickedAg();

// document.querySelectorAll(".list ul li").forEach((li) =>
//     li.addEventListener("click", (e) => {
//       li.classList.toggle("clickWork"); // Toggle the class on the clicked <li> element
//     });
//   });
