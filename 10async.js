// //============HTTP REQUESTS=============

// //Create a variable
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

// //============HTTP REQUESTS=============

//Create the funtion
// const getTodos = (callback) => {

//     const request = new XMLHttpRequest();

//     request.addEventListener("readystatechange", () => {
//         if(request.readyState === 4 && request.status === 200){
//             //Create an array out of the JSON data
//             const data = JSON.parse(request.responseText)
//             //add in the callback function with the arguments
//             callback(undefined, data)
//         } else if(request.readyState === 4){
//             callback("Couldn't fetch resource", undefined)
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
//     console.log("callback fired");
//     if(err){
//         console.log(err)
//     } else{
//         console.log(data)
//     }
// });

// console.log(4);
// console.log(5);