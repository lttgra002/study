

//Function to Get Tasks

const getTasks = async () => {

    //const base = "https://jsonplaceholder.typicode.com/todos/"
    const base = "todo.json"

    const resource = await fetch(base);
    const data = await resource.json();
    const tenTasks = data.slice(0,9)

    return tenTasks
    

}


