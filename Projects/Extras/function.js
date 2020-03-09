//EXPRESSION
//When you create a variable for the function and store it inside

// const speak = function(){
//     console.log("hello");
// };

// speak();


//DECLARATION

// speak();

// function speak(){
//     console.log("hello")
// };


//Which to use?
//It is suggested to use an expression. A declaration makes use of hoisting. 
//Therefore with a declaration it is possible to call a function before defining it
//Whereas, with an expression you need to define it before calling it

//============ARGUMENTS & PARAMETERS
//You can give a parameter a default value

// const greet = function(name = "mario", time = "morning"){
//     console.log(`Good ${time} ${name}`);
// };

// //defaults will be assigned when no arguments are entered
// greet()

//===========RETURN VALUE===========
//Return statement is used, when you want to get a value 

// let radius = 5;
// let height = 8;

// const calcArea = function(radius){
//     return 3.14 * radius**2;
// };

// const calcVol = function(height){
//     return calcArea(radius)*height;
// };

// console.log(calcVol(height))

//============ARROW FUNCTIONS=======
//=>Regular Function

// const calcArea = function(radius){
//     return 3.14 * radius**2;
// };

//=>Arrow Function

// const calcArea = (radius) => 3.14 * radius**2;

// //When you place brackets around you create an object and therefore need to use the return statement?

// console.log(calcArea(9));

//===========METHODS===============
//A method is a function
//Use dot notation on existing variable

//=>Function

//Normal
// const greet = function(){
//     return "hello";
// };
//Arrow
// const arrowGreet = () => "helloArrow";

// console.log(greet());
// console.log(arrowGreet());

//=>Method

// const name = "Grant";

// console.log(name.toUpperCase());

//==========CALLBACK FUNCTION=======
//When you use a function in the argument of another function

// const myFunc = (callBackFunc) => {
//     let value = 50;
//     callBackFunc(value);
// }

// myFunc(value => {console.log(value)})

// const myFunk1 = function(callBackFunc1){
//     let value = 60
//     callBackFunc1(value)
// };

// myFunk1(function(value){
//     console.log(value)
// })

// const doHomeWork = (callBack2, subject) => {
//    
//     callBack2();
//     console.log(`You must study ${subject}`);
// };

// const newFunc = () => {console.log(20*10)};

// doHomeWork(newFunc, "math");

// const doCalcFunc = (callBack3) => {
//     callBack3();
// }

//doCalcFunc(newFunc);

//Double Function test

const doubleFunc = (function1, function2) => {
     //The order of where the functions are structured determine when they called
    
    function1();
    function2();
    
};

const calcPara1 = () => console.log(20*20);
const calcPara2 = () => console.log(10*10);

doubleFunc(() => console.log(20*20), calcPara2);
