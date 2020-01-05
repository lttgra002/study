/*QUERYING THE DOM*/

/*QUERY SELECTOR*/
//const para = document.querySelector('div.error');
//console.log(para);

/*
const paras = document.querySelectorAll("p");
const errors = document.querySelectorAll(".error");

//console.log(paras[2])
console.log(errors);

errors.forEach((para) => {
    console.log(para)
}) 
*/

//===================================

//CHANGING CONTENT

//const paragraphs = document.querySelectorAll("p");
//console.log(paragraphs[1].innerText);
//paragraphs[1].innerText = "I have changed this text";
//if you want to append:
//paragraphs[1].innerText += " added on the Hello";

//Callback Funtion
/*paragraphs.forEach(para => {
    para.innerText = "jou ma se"
})*/

//==================================
// CHANGING HTML

//const theDiv = document.querySelector("div.error");

//theDiv.innerHTML = "<h2>Changed to Heading</h2>"

//const people = ["Grant", "Nicky", "Craig"];


//people.forEach(person => {
  // theDiv.innerHTML += `<p> ${person} is great </p>`
//})

//======================================
//GETTING AND SETTING ATTRIBUTES
/*
const link = document.querySelector("a");

console.log(link.getAttribute("href"));
link.setAttribute("href", "https://www.facebook.com");
link.setAttribute("target", "_blank");
link.innerText = "Link to Facebook";

const message = document.querySelector("p.error");

message.setAttribute("class", "success");
message.setAttribute("style", "color:red");
*/

//======================================
//CHANGING CSS STYLES
/*
const header = document.querySelector("h1");

console.log(header.style);
//Get just the style property
console.log(header.style.color)
// Add a Style or change
header.style.margin = "50px";
header.style.color = "crimson";
// Font size with a hyphen (remove the hyphen and use camel case)
header.style.fontSize = "48px";
// Remove a style
header.style.margin = '';
*/

//=======================================
//ADDING AND REMOVING CLASSES
/*
const error = document.querySelector("p.error");

// to get a list of all the classes an element has
console.log(error.classList);
// adding a class 
//error.classList.add("another");
// removing a class
error.classList.remove("error");

error.classList.add("success");
*/

//=================================
//TOGGLE CLASS 
/*
const title = document.querySelector("h1.title");

title.classList.toggle("newtitle")
*/
//==================================
//TASK

/*
const para = document.querySelectorAll("p");

para.forEach(text => {
        let x = text.innerText.indexOf("success");
        let y = text.innerText.indexOf("error");
        if(x >= 0){
            text.setAttribute("class", "success")
            console.log(text.innerText)
        } 
        else if(y >= 0){
            text.setAttribute("class", "error")
        }
        
    })
*/

//example
/*
para.forEach(p => {
    if(p.textContent.includes("success")){
        p.classList.add("success")
    }
    else if(p.textContent.includes("error")){
        p.classList.add("error")
    }
})
*/

//=========================================
//PARENTS, CHILDREN AND SIBLINGS
/*
const article = document.querySelector("article");

//console.log(article.children)
//console.log(Array.from(article.children))

/*
Array.from(article.children).forEach(child => {
        child.classList.add("article-element")
})


const title = document.querySelector("h2");
console.log(title.parentElement.parentElement);
console.log(title.nextElementSibling);
console.log(title.previousElementSibling);

//Chaining

console.log(title.nextElementSibling.parentElement.children);
*/