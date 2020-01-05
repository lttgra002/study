//=============ARRAY METHODS=====================

//============Filter Method===================

// const scores = [10, 30, 15, 25, 50, 40, 5]

//Basic Handling
// const filteredScores = scores.filter((score) => {
//     return score > 20;
// });

// console.log(filteredScores)

// const users = [
//     {name: "shaun", premium: true},
//     {name: "yoshi", premium: false},
//     {name: "mario", premium: false},
//     {name: "chun-li", premium: true}
// ];

// const premiumUsers = users.filter(user => {
//     return user.premium;
// });

// console.log(premiumUsers)

//=============Map Method================

// const prices = [20, 10, 30, 25, 15, 40, 80, 5];

// const salePrices = prices.map((price) => {
//     return price / 2;
// })

// console.log(salePrices)

// const products = [
//     {name: "gold star", price: 20},
//     {name: "mushroom", price: 40},
//     {name: "green shells", price: 30},
//     {name: "banana skin", price: 10},
//     {name: "red shells", price: 50}
// ];

// const saleProducts = products.map((product) => {
//     if(products.price > 30){
//         //You need to return an object to replace the object from the original array, 
//         //otherwise you will destroy the original array
//         return {name: product.name, price: product.price / 2}; 
//     } else {
//         return product;
//     }
// });

// console.log(saleProducts)


//==============Reduce Method=================
//The reduce method returns a number, rather than an array

// const scores = [10, 20, 60, 40, 70, 90, 30];

// //The reduce method takes in 2 variables, the accumulator and the current
// //The accumulator can be used to add the various numbers in the array
// //The second argument is the starting number for the accumulator
// const result = scores.reduce((acc, curr) => {
//     if(curr>50){
//         acc++;
//     }
//     return acc;
// }, 0);

// console.log(result);

// const scores = [
//         {player: "mario", score: 50},
//         {player: "yoshi", score: 30},
//         {player: "mario", score: 70},
//         {player: "crystal", score: 60},
//         {player: "mario", score: 50},
//         {player: "yoshi", score: 30},
//         {player: "mario", score: 70},
//         {player: "crystal", score: 60},
//         {player: "mario", score: 50},
//         {player: "yoshi", score: 30},
//         {player: "mario", score: 70},
//         {player: "crystal", score: 60}
// ];

// const result = scores.reduce((acc, curr) => {
//     if(curr.player === "mario"){
//         acc += curr.score
//     }
//     return acc;
// }, 0);

// console.log(result);

//================Find Method==================
// const scores = [10, 5, 0, 40, 45, 10, 20, 70];

// //Returns the first value in an array that passes the test

// const firstHighScore = scores.find((score) => {
//     // need to enter a true/false statement
//     return score > 50;
// });

// console.log(firstHighScore)

//================Sort Method================
//1. Strings
//Sort these names in alphabetical order
// const names = ["mario", "shaun", "chun-li", "yoshi", "luigi"];

// //The sort method has an in-built algorithm that sorts alphabetically 
// //It alters the original array (therefore destructive)

// // names.sort();
// // console.log(names);

// //If you want to reverse the array
// //Good to use sort then reverse

// names.sort();
// names.reverse();
// console.log(names);

// //2. Numbers
// const scores = [10, 50, 20, 5, 35, 70, 45];
// // //This only looks at the first number, not the whole number
// // scores.sort();
// // console.log(scores);

// //To use a compare function
// scores.sort((a,b) => a - b);
// console.log(scores);

// //3. Sorting Objects
// const players = [
//     {name: "mario", score: 20},
//     {name: "luigi", score: 10},
//     {name: "chun-li", score: 50},
//     {name: "yoshi", score: 30},
//     {name: "shaun", score: 70}
// ];

// players.sort((a,b) => b.score - a.score);

// console.log(players);

//============Chaining Array Methods=========
// const products = [
//     {name: "gold star", price: 30},
//     {name: "mushroom", price: 10},
//     {name: "green shells", price: 40},
//     {name: "banana skin", price: 5},
//     {name: "red shells", price: 50}
// ];

// //How to do it without chaining
// // const filtered = products.filter(product => product.price > 20);

// // const promos = filtered.map(product => {
// //     return `the ${product.name} is ${product.price / 2} pounds`;
// // });

// //Actual Chaining method
// const promos = products
//     .filter(product => product.price > 20)
//     .map(product => `the ${product.name} is ${product.price / 2} pounds`);

// console.log(promos)
