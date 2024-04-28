let subBtn = document.querySelector(".subBtn")
// let result = {
// "email": "hossainshaka556@gmail.com",
// "autocorrect": "",
// "deliverability": "UNDELIVERABLE",
// "quality_score": "0.00",
// "is_valid_format": {
//     "value": true,
//     "text": "TRUE"
// },
// "is_free_email": {
//     "value": true,
//     "text": "TRUE"
// },
// "is_disposable_email": {
//     "value": false,
//     "text": "FALSE"
// },
// "is_role_email": {
//     "value": false,
//     "text": "FALSE"
// },
// "is_catchall_email": {
//     "value": false,
//     "text": "FALSE"
// },
// "is_mx_found": {
//     "value": true,
//     "text": "TRUE"
// },
// "is_smtp_valid": { 
//     "value": false,
//     "text": "FALSE"
// }
// }
let results = document.querySelector(".resultCont")





subBtn.addEventListener("click",async (e) => {
  
    results.innerHTML = ` <img src="loading.svg" alt="">`
    let email = document.querySelector("#username").value
    let key = "c9fad221a24c4680851aacbfcba074e2"
    let url = `https://emailvalidation.abstractapi.com/v1/?api_key=${key}&email=${email}`
    let res = await fetch(url)
    let result = await res.json()
    let str = ``
    for (let key in result) {
        if (result.hasOwnProperty(key)) {
          const div = document.createElement('div');
         str = str + `<div>${key}: ${JSON.stringify(result[key])}</div>`;   //JSON.stringify() converts the JavaScript value to a JSON string. This is necessary because the textContent property expects a string, and using JSON.stringify() ensures that even if the value is an object or array, it will be converted to a string representation that can be displayed properly.
         results.innerHTML = str
        }
      }})

       // The code below is not needed anymore



    // function displayResult(result){
    // results.innerHTML = ""}
    // for (let key in result) {
    //     if (result.hasOwnProperty(key)) {
    //       const paragraph = document.createElement('p');
    //       paragraph.textContent = `${key}: ${JSON.stringify(result[key])}`;
    //       results.appendChild(paragraph);
    //     }
    //   }
    //   displayResult(result)


    // for (let key in result) {
    //     if (result.hasOwnProperty(key)) {
    //       console.log(key + ": ", result[key]);
    //     }
    //     str = str + `<div>${key} : ${result[key]}</div>`
    //     results.innerHTML = str
    //   }})
    
    // for (const key in result) {
    //     if(result[key]!=="" && result[key]!==" "){
    //         str = str + `<div>${key} : ${result[key]}</div>`
        // console.log(key)
        // console.log(result)
    //})
      
// }
    // results.innerHTML = str
  
  
// })

