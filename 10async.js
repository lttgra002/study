//============HTTP REQUESTS=============

const getTodos = () =>{

    const request = new XMLHttpRequest();

    request.addEventListener("readystatechange", () => {
        //console.log(request, request.readyState)
        //Each stage has a number. 4 is when you receive the data
        if(request.readyState === 4 && request.status === 200){
            console.log(request, request.responseText)
        } else if(request.readyState === 4){
            console.log("error")
        }
    })

    request.open("GET", "https://jsonplaceholder.typicode.com/todoss/");
    request.send();
}

getTodos()