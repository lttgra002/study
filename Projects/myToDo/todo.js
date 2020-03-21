const toDoContainer = document.querySelector(".toDoContainer");
const addDropdown = document.querySelector(".addDropdown")

//Create Task List from data source

console.log(addDropdown.value)

const updateUI = (data) => {

    
    data.forEach(element => {
        toDoContainer.innerHTML += `<div class="task ${element.completed}">
                                        <div class="idNo"> ${element.id} </div> 
                                        <div class="title"> ${element.title} </div>
                                        <div class="delete"> X </div>
                                    <div/>`
    });

}


//Filter To Do's

const filterFalse = () => {

    Array.from(toDoContainer.children)
        .forEach((todo) => {
            if(todo.classList.contains("true")){
                todo.classList.add("filteredTrue")
            } else if(todo.classList.contains("false")){
                todo.classList.remove("filteredFalse")
            }   
        })
}

const filterActive = () => {


    Array.from(toDoContainer.children)
        .forEach((todo) => {
            if(todo.classList.contains("false")){
                todo.classList.add("filteredFalse")
            } else if(todo.classList.contains("true")){
                todo.classList.remove("filteredTrue")
            }   
        })
}



getTasks()
    .then(data => { 
        updateUI(data)
        //console.log(Array.from(toDoContainer.children))
        toDoContainer.addEventListener("click", e => {
            if(e.target.classList.contains("delete")){
                e.target.parentElement.remove()
            }
            
        });

        addDropdown.addEventListener("change", () => {
            let selection = addDropdown.value
            if(selection == 1){
                filterFalse()
            } else if(selection == 0){
                filterActive()
            }
        })
    })
    .catch(err => {console.log(err)})


