//FOR LOOPS
/*for(i = 1; i <= 5; i++){
    console.log(`loop no: ${i}`)
}

console.log("loop finished");*/

//const names = ["Grant", "Nicky", "Sarina", "Craig"];

/*for(let i = 0; i < names.length; i++){
    //console.log(names[i])
    let html = `<div>${names[i]}</div>`;
    console.log(html)
}*/


//WHILE LOOPS
/*let i = 0;

while(i < names.length){
    console.log(names[i]);
    i++;
}*/


//DO WHILE LOOPS
/*const names = ["Grant", "Nicky", "Sarina", "Craig"];

let i = 3;

do{
    console.log(names[i]);
    i++;
} while(i < names.length);*/


//IF STATEMENTS

/*const names = ["Grant", "Nicky", "Sarina", "Craig"];

if(names.length > 5){
    for(let i = 0; i < names.length; i++){
        console.log(names[i])
    }
}*/

/*const password = "passw";

if(password.length >= 12){
    console.log("strong")
} 
else if(password.length >= 8){
    console.log("weak")
}
else{
    console.log("Password is not long enough")
}*/


//LOGICAL OPERATORS AND && OR ||

/*const password = "p@sswo";

if(password.length >= 12 && password.includes("@")){
    console.log("very strong")
} 
else if(password.length >= 8 || password.includes("@") && password.length > 5){
    console.log("standard")
}
else{
    console.log("Password is not long enough")
} */


//LOGICAL OPERATOR NOT (!)
/*let user = false;

if(!user){
    console.log("User is not logged in")
}*/


//BREAK AND CONTINUE

/*const scores = [30, 0, 74, 100, 12, 4, 6, 91];

for(let i = 0; i < scores.length; i++ ){

    if(scores[i] === 0){
        continue
    }

    console.log(`Score: ${scores[i]}`);

    if(scores[i] === 100){
        console.log("Congrats! You got the top Score");
        break;
    }
}*/


//SWITCH STATEMENTS

/*const grade = "A";

switch(grade){
    case "A": 
        console.log("excellent");
        break;
    case "B": 
        console.log("Good");
        break;
    case "C": 
        console.log("Average");
        break;
    case "D": 
        console.log("Poor");
        break;
    case "E": 
        console.log("Retard");
        break;
    default: 
        console.log("not a valid grade")

}*/
