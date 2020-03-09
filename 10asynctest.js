const getToDos = (resource) => {

    return new Promise((resolve, reject) => {

        const request = new XMLHttpRequest();

        request.addEventListener("readystatechange", () => {
    
                if(request.readyState === 4 && request.status === 200){
                    const data = JSON.parse(request.responseText);
                    resolve(data)
                } else if(request.readyState === 4){
                    reject("an error occured")
                }
                //console.log(request)
    
        })
    
    
        request.open("GET", resource)
        request.send()
    }); 
};

getToDos("https://jsonplaceholder.typicode.com/todos/1").then((data)=>{
    console.log(data)
    return getToDos("https://jsonplaceholder.typicode.com/todos/2")
}).then((data) => {
    console.log(data)
    return getToDos("https://jsonplaceholder.typicode.com/todos/3")
}).then((data) => {
    console.log(data)
}).catch((err) => {
    console.log(err)
})
