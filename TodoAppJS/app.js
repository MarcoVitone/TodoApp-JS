const input = document.querySelector("input");
const button = document.querySelector("button");
const ul = document.querySelector("ul");


button.addEventListener("click", addTodo);
ul.addEventListener("click", removeTodo);

function addTodo (e) {
    const li = document.createElement("li");
    li.className = "todo"
    if(input.value.trim() === ""){
        return
    }
    li.innerText = input.value;
    const deleteTodo = document.createElement("a");
    deleteTodo.className = "delete-todo";
    deleteTodo.innerHTML = "<h3>X</h3>";
    li.appendChild(deleteTodo);
    ul.appendChild(li);
    input.value = "";
    e.preventDefault()
}

function removeTodo (e) {
    if(e.target.parentElement.classList.contains("delete-todo")){
        e.target.parentElement.parentElement.remove();
    };
}

