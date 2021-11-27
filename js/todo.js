const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input"); 
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos"

let toDos = [];

function saveTodos() {
    localStorage.setItem(TODOS_KEY,JSON.stringify(toDos));
}

function checkedToDo(event){
    const li = event.target.parentElement;
    var hasClass = li.classList.contains("todo");
    if (hasClass) {
        li.setAttribute("class","");
        li.setAttribute("class","todo-checked");
    } else {
        li.setAttribute("class","");
        li.setAttribute("class","todo");
    }
}

function deleteToDo(event) {
    const li = event.target.parentElement.parentElement;
    li.remove();
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    saveTodos();
}

function paintToDo(newTodo) {
    const li = document.createElement("li");
    li.id = newTodo.id;
    li.setAttribute("class", "todo");
    const span = document.createElement("span");
    span.innerText = newTodo.text;
    const checkButton = document.createElement("input");
    checkButton.setAttribute("type", "checkbox");
    checkButton.setAttribute("class", "toggle");
    checkButton.addEventListener("click", checkedToDo);
    const deleteButton = document.createElement("button");
    deleteButton.innerHTML = "<i class='fas fa-times fa-lg'></i>";
    deleteButton.addEventListener("click", deleteToDo);
    li.appendChild(checkButton);
    li.appendChild(span);
    li.appendChild(deleteButton);
    toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    const newTodoObj = {
        text:newTodo,
        id: Date.now(),
    }
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveTodos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}