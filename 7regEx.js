//===Testing a Regular Expression

// let username = "granttr2";
// const pattern = /^[a-z]{6,}$/;

// let result = pattern.test(username);

// if(result){
//     console.log("Well Done!")
// } 
// else{
//     console.log("You Failed")
// }

///====Search for the position of the match

// let username = "1234granttrw";
// const pattern = /[a-z]{6,}/;

// let result = username.search(pattern)

// console.log(result)

//============BASIC VALIDATION================

// const form = document.querySelector(".signup-form");
// const feedback = document.querySelector(".feedback");
// const usernamePattern = /^[a-zA-Z]{6,12}$/;

// form.addEventListener("submit", e => {
//     e.preventDefault();

//     //validation
//     const username = form.username.value;
    

//     if(usernamePattern.test(username)){
//         feedback.textContent = "Valid Submission"
//     }else{
//         feedback.textContent = "Must contain only letters and be between 6 & 12 characters"
//     }
// })

// //Keyboard events

// form.username.addEventListener("keyup", e => {
//     //Check "e" event property
//     console.log(e);

//     //console.log(e.target.value, form.username.value)
//     if(usernamePattern.test(e.target.value)){
//         form.username.setAttribute("class", "success")
//     } else{
//         form.username.setAttribute("class", "error")
//     }
// })
