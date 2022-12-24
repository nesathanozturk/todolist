// ELEMENTS
const button = document.getElementById("btn");
const input = document.getElementById("input");
const ulList = document.getElementById("list-container");
const liEl = document.querySelectorAll("li");
const close = document.getElementsByClassName("close");

const todos = JSON.parse(localStorage.getItem("ulList"));
if (todos) {
    todos.forEach(list => toDoItems(list));
}; 

// ITEMS FUNCTIONS:
button.addEventListener("click", toDoItems);

// ADD TO DO:
function toDoItems(list) {
    let inputText = input.value;
    if (list) {
        inputText = list.text;
    };

    if (input.value.trim() === "") {
        alert("You must make an addition");
    } else {
        let liEl = document.createElement("li");
        liEl.innerText = input.value;
        ulList.appendChild(liEl);
        input.value = "";

// X BUTTON:
    const span = document.createElement("span");
    const text = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(text);
    liEl.appendChild(span);

// COMPLETED:
    liEl.addEventListener("click", () => liEl.classList.toggle("completed"))
    addLS();
    };

// REMOVE ITEM:
    for (let i = 0; i < close.length; i++) {
        close[i].onclick = function() {
            let liEl = this.parentElement;
            liEl.style.display = "none";
            addLS();
        };
    }; 
};

// LOCAL STORAGE:
function addLS() {
    todoEl = document.querySelectorAll("li");

    const todos = [];

    todoEl.forEach(listEl => {
        todos.push({
            text: listEl.innerText,
            completed: listEl.classList.contains("completed"),
        })
    })
    localStorage.setItem("todos", JSON.stringify(todos));
};
