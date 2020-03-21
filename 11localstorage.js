// //==================Store Data in Local Storage===========

// //Use the setItem method, which takes 2 arguments
// //Name of the key as the 1st argument
// //Value as the second argument
// //Everything should be a string when stored in local storage

// localStorage.setItem("name", "mario")
// localStorage.setItem("age", 50)


// //==================Get Data from Local Storage===========
// //Use getItem, just pass in the name as a key
// //Once in local storage the page can be refreshed and it will still be available

// let name = localStorage.getItem("name");
// let age = localStorage.getItem("age");

// console.log(name, age)

// //=================Update Data===============
// //Need to use SetItem again

// localStorage.setItem("name", "luigi");

// //Dot Notation can also be used to update data
// localStorage.age = "40";

// name = localStorage.getItem("name")
// age = localStorage.getItem("age")

// console.log(name, age)

// //=========Deleting Items from Local Storage====
// // Can use the remove item method

// //localStorage.removeItem("name")

// // name = localStorage.getItem("name")

// // console.log(name)

// // If you want to clear the entire local storage

// localStorage.clear()

// name = localStorage.getItem("name")
// age = localStorage.getItem("age")

// console.log(name, age)

//========Stringifying and Parsing Data =========

const todos = [
    {text: "buy Milk", author: "Grant"},
    {text: "Wash up the dishes", author: "Grant"},
    {text: "take out bin", author: "Nicky"}  
];

// Need to turn the above object into a String
// Use JSON.stringfy method

//console.log(JSON.stringify(todos))

// Need to add it to Local Storage 

localStorage.setItem("todos", JSON.stringify(todos))

//Can use the getItem to get it back
//Can use the JSON Parse method to turn it back into an array

const storedData = localStorage.getItem("todos")

console.log(JSON.parse(storedData))