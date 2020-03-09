//============HTTP REQUESTS=============

//Create a variable
//     const request = new XMLHttpRequest();

// //Everytime there is a change in state this EventListener will fire

// request.addEventListener("readystatechange", () => {
//     //Will log to console everytime there is a change in state
//     //Good to use this to check what is received in the console
//     //MDN guide gives details on each state
//     //console.log(request, request.readyState)
    
//     //Do an if check to see when the response is at stage 4, then change the response text
//     //We should also check the response status, to see if there is an error. All the different statuses can be viewed on the MDN site
//     if(request.readyState === 4 && request.status === 200){
//         console.log(request.responseText)
//     } else if(request.readyState === 4){
//         //Adds in a little message, so the request reached stage but there was an error along the way
//         console.log("There has been an error")
//     }
// });

// //Sends the request to the source point
//     request.open("GET", "https://jsonplaceholder.typicode.com/todos/");
//     request.send();

//WE CAN PLACE ALL THE ABOVE INTO A FUNCTION SO THAT IS REUSABLE I.E. EVERYTIME TODOS NEED TO BE CALLED
//THIS IS ALL REPLICATED BELOW IN A FUNCTION

//=================Request in Callback Function===============

//============HTTP REQUESTS=============

// //Create the funtion
// const getTodos = (callback) => {

//     const request = new XMLHttpRequest();

//     request.addEventListener("readystatechange", () => {
//         if(request.readyState === 4 && request.status === 200){
//             //Create an array out of the JSON data (which comes as a string)
//             const data = JSON.parse(request.responseText)
//             //add in the callback function with the arguments
//             callback(undefined, data)
//         } else if(request.readyState === 4){
//             callback("Couldn't fetch resource")
//         }
//     });

//     //request.open("GET", "https://jsonplaceholder.typicode.com/todos/");
//     //If I want to point to my own JSON file
//     request.open("GET", "10async.json");
//     request.send();

// };

// console.log(1);
// console.log(2);

// //To run the code
// getTodos((err, data) => {
//     //console.log("callback fired");
//     //The if checks if the string is true. If "undefined" then it is false, if an actual string then true
//     if(err){
//         console.log(err)
//     } else{
//         console.log(data)
//     }
// });

// console.log(4);
// console.log(5);

//=============CALLBACK HELL==============

// const getTodos = (resource, callback) => {

//     const request = new XMLHttpRequest();

//     request.addEventListener("readystatechange", () => {
//         if(request.readyState === 4 && request.status === 200){
//             //Create an array out of the JSON data
//             const data = JSON.parse(request.responseText)
//             //add in the callback function with the arguments
//             callback(undefined, data)
//         } else if(request.readyState === 4){
//             callback("Couldn't fetch resource")
//         }
//     });

//     //request.open("GET", "https://jsonplaceholder.typicode.com/todos/");
//     //If I want to point to my own JSON file
//     request.open("GET", resource);
//     request.send();

// };

// //Create a callback in a callback, so that you call each of the pieces of data in a specific order

// getTodos("10async.json",(err, data) => {
//             console.log(data)
//         getTodos("10async2.json",(err, data) => {
//             console.log(data)
//         });
//             getTodos("10async3.json",(err, data) => {
//                 console.log(data)
//             });
// });

//=================PROMISES==============================

//BASIC EXAMPLE WITHOUT REQUESTING RESOURCE

// const getSomething = () =>{

//     return new Promise((resolve, reject) => {
//        //resolve("Some Data")
//        reject("some error")
//     });
// }

//This is if you just use 2 callbacks, but the catch method can be used to make it neater
// getSomething().then((data)=>{
//     console.log(data)
// }, (err) => {
//     console.log(err)
// });

//Using the Catch Method
// getSomething().then((data)=>{
//     console.log(data)
// }).catch((err)=>{
//     console.log(err)
// });

//ACTUAL FUNCTION

// const getTodos = (resource) => {

//     return new Promise((resolve, reject) =>{
        
//         const request = new XMLHttpRequest();

//         request.addEventListener("readystatechange", () => {
//             if(request.readyState === 4 && request.status === 200){
//                 //Create an array out of the JSON data
//                 const data = JSON.parse(request.responseText)
//                 //add in the callback function with the arguments
//                 resolve(data)
//             } else if(request.readyState === 4){
//                 reject("Couldn't fetch resource")
//             }
//         });

//         request.open("GET", resource);
//         request.send();
//     })
// };

// // getTodos("10async.json").then((data)=>{
// //     console.log(data)
// // }).catch((err)=>{
// //     console.log(err)
// // })

// //===Chaining Promises

// getTodos("10async.json").then((data) => {
//     console.log(data)
//     return getTodos("10asnc2.json")
// }).then((data)=>{
//     console.log(data)
//     return getTodos("10async3.json")
// }).then((data)=>{
//     console.log(data)
// }).catch((err)=> {
//     console.log(err)
// })

//===================FETCH API=====================

//Can use this instead of the XMLHttpRequest feature
//Has the promise build in

// fetch("https://jsonplaceholder.typicode.com/todos/1").then((response)=>{
//     //console.log(data)
//     return response.json()
// }).then(data => {
//     console.log(data)
// }).catch((err) => {
//     console.log(err)
// })

//====================ASYNC & AWAIT=================

//Using the async and await, is another way of chaining promises. Rathen than the "then" method
//Must check out axios library

// const getToDos = async (resource) => {

//     const response = await fetch(resource);
//     const data = await response.json()
    
//     return data
// };


// getToDos("https://jsonplaceholder.typicode.com/todos/1")
//     .then(mydata => {console.log(mydata)});

// getToDos("https://jsonplaceholder.typicode.com/todos/2")
//     .then(mydata => {console.log(mydata)});


// //When adding async the function is a promise
// const myPromise = getToDos();
// console.log(myPromise)

//===Throw and Catch
//This is used for error catching 
const getToDos = async (resource) => {

    const response = await fetch(resource);
    //the reponse is a promise. So it either needs to be resolved or rejected
    //So if the reponse status is not = to 200, then an error with throw, which means the catch method
    //in the function below, will be used.
    if(response.status !== 200){
        throw new Error("cannot fetch data")
    }

    const data = await response.json()
    
    return data
};


getToDos("10async.json")
    .then(mydata => {console.log(mydata)})
    .catch(err => {console.log(err)})
