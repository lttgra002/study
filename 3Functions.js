//FUNCTIONS


//FUNCTION DECLARATION & EXPRESSION
/*The suggestion is to use expressions over declarations
function greet(){
    console.log("Hello");
}
greet();

//EXPRESSION
const speak = function(){
    console.log("Good Day")
};

speak();*/


//ARGUMENTS & PARAMETERS

/*const speak = function(name = "Nicky", time = "Night"){
    console.log(`Good ${time} ${name}`)
};

speak("Grant", "Morning");
speak("Craig")*/


//RETURNING VALUES

/*
let radius = 5
let height = 12

const calcArea = function(radius){
        return 3.14 * radius**2;
};

const area = calcArea(radius);

const calcVolume = function(height){
    return area * height
};

let volume = Number(calcVolume(height).toFixed(2));
console.log(volume);*/


//ARROW FUNCTIONS

/*
let radius = 5;
let height = 12;

const calcArea = radius => 3.14 * radius**2;

const area = Number(calcArea(radius));

console.log(`Area is: ${area}`);*/

/*const greet = () => "hello world";
console.log(greet());

const products = [30, 23, 15];
const tax = 0.15

const bill = (products, tax) => {
    let total = 0
    for(let i = 0; i < products.length; i++){
        total += products[i] + products[i] * tax
    }
    return total
}

console.log(bill(products, tax));*/


//FUNCTIONS VS METHODS

/*const name = "Grant";
//FUNCTION

const greeting = () => "hello";
let resultOne = greeting();
console.log(resultOne);

//METHOD
let resultTwo = name.toUpperCase();
console.log(resultTwo);*/


//CALLBACK FUNCTIONS & FOREACH
/*const people = ["Grant", "Nicky", "Sarina", "Craig"];

people.forEach((person, index) => {
    console.log(`${index} - Hello ${person}`)
});*/

//const ul = document.querySelector(".people");
//const people = ["Grant", "Nicky", "Sarina", "Craig"];

/*let html = ``;
people.forEach(person => {
    //create HTML template
    html += `<li style="color: green">${person}</li>`
});/*


//NOTE - This is the same function as forEach. forEach Method is a quick 
// way of passing through arrays
/*let html = ``;
for(let i = 0; i < people.length; i++){
    html += `<li style="color: green">${people[i]}</li>`
}

ul.innerHTML = html;*/


//OBJECTS


const blogs = [
   
];

console.log(blogs);

let user = {
    name: "Grant",
    height: 1.75,
    weight: 75,
    location: "Cape Town",
    blogs: [ 
        {title: "10 things I hate", author: "Bazil", likes: 0},
        {title: "12 things I love", author: "Fred", likes:0}
        ],
    login(){
        console.log("The User Logged In!")
    },
    logBlogs(){
        //console.log("This user has written the current Blogs:");
        this.blogs.forEach(blog =>
           console.log(`Title: ${blog.title} - `, 
                        `Author: ${blog.author} - `,
                        `Likes: ${blog.likes} - `)
            
           );},
    logWeight(){
        console.log(this.weight);
    }
       
}

//console.log(user);
//console.log(user.name);

//user.name = "Nicky";
//console.log(user.name);

//console.log(user["name"]);

//console.log(typeof user);

//user.login();
//user.logBlogs();
user.logWeight();


//MATH OBJECT

/*
const random = Math.random();

console.log(Math.round(random*100));
*/
