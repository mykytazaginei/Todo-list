const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");

//
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click")

//functions
function addTodo(event){
    event.preventDefault();
    //Todo DiV
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");  
    //create li
    const newTodo = document.createElement("li");
    newTodo.innerText = todoInput.value;
    newTodo.classList.add("todo-item");
    todoDiv.appendChild(newTodo);
    //check button
    const completedButton = document.createElement("button");
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);
    //delete button 
    const trashButton = document.createElement("button");
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);
    //add list
    todoList.appendChild(todoDiv);
    todoInput.value = "";   
    
    
}