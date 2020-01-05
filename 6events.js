//EVENT LISTENER
/*
const button = document.querySelector("button");

button.addEventListener("click", () => {
    console.log("you clicked me")
})
*/

//EVENT LISTENER 

//const listItems = document.querySelectorAll("li");
/*
const button = document.querySelector("button");
const ul = document.querySelector("ul");
*/
//To add an item
/*
button.addEventListener("click", () => {
    let li = document.createElement("li");
    li.innerHTML = "New Task";
    //Append goes below
    //ul.append(li);
    //prepend goes above
    ul.prepend(li);

});
*/

//To remove a list item
/*
listItems.forEach(item => {
    item.addEventListener("click", e => {
        //console.log(e.target)
        //Put line through
        //e.target.style.textDecoration = "line-through"
        //Remove from the DOM
        e.target.remove()
    })
});
*/

//Bubbling (If there is an eventListener on a parent element, then it also gets triggered)
/*
listItems.forEach(item => {
    item.addEventListener("click", e => {
        e.target.remove();
        //Stop propagation stops the parent element from triggering
        e.stopPropagation();
    })
});
*/

//Delegation
/*
ul.addEventListener("click", e =>{
    //console.log(e.target)
    if(e.target.tagName === "LI"){
        e.target.remove()
    }
})
*/

//==============================================================
//More DOM Events

//COPY
/*
const copy = document.querySelector(".copy-me");

copy.addEventListener("copy", () => {
    console.log("Copyright!!!")
})
*/

//MOUSEMOVE
/*
const box = document.querySelector(".box")

box.addEventListener("mousemove", e => {
    //console.log(e)
    //console.log(e.offsetX, e.offsetY)
    box.textContent = `x-position = ${e.offsetX}, y-position = ${e.offsetY}`
})
*/

//SCROLL
/*
document.addEventListener("wheel", e => {
    console.log(e.pageX, e.pageY)
} )
*/

//CLICK
/*
const button = document.querySelector("button");

button.addEventListener("click", e => {
    //console.log(e)
    //e.target.disabled = true;
})
*/

//===============================================
//BUILDING A POPUP

const button = document.querySelector("button");
const popup = document.querySelector(".popup-wrapper");
const close = document.querySelector(".popup-close");

//Opens the Popup
button.addEventListener("click", () => {
    popup.style.display = "block";
})

//Closes the Popup
close.addEventListener("click", () => {
    popup.style.display = "none";
})

//Close the popup by clicking the background
popup.addEventListener("click", () => {
    popup.style.display = "none";
})

//=============SUBMIT EVENTS=======================
//  const form = document.querySelector(".signup-form");
// // //const username = document.querySelector("#username");
// // //Don't need to create a separate queryselector for an input field

// form.addEventListener("submit", e => {
//     e.preventDefault();
//     console.log(form.username.value)
// })