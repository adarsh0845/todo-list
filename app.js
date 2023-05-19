//Selectors
const todoInput = document.querySelector(".todo-input");
const todoBtn = document.querySelector(".input-btn");
const todoList = document.querySelector(".todo-list");
const filterOption = document.querySelector(".filter-todo");
const taskCounter = document.querySelector(".task-counter");
var counter = 0;

//Event Listner
todoBtn.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);
filterOption.addEventListener("click", filterTodo);

//Functions

function addTodo(event) {
  //Prevent form from Submitting
  event.preventDefault();
  //TODO Div
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");

  //Append To List
  todoList.appendChild(todoDiv);

  //Add LI
  const newTodo = document.createElement("li");
  newTodo.innerText = todoInput.value;
  newTodo.classList.add("todo-item");
  todoDiv.appendChild(newTodo);

  //Checked Btn
  const doneBtn = document.createElement("button");
  doneBtn.innerHTML = '<i class="fas fa-check"></i>';
  doneBtn.classList.add("done-btn");
  todoDiv.appendChild(doneBtn);

  //Delete Btn
  const delBtn = document.createElement("button");
  delBtn.innerHTML = '<i class="fas fa-trash"></i>';
  delBtn.classList.add("del-btn");
  todoDiv.appendChild(delBtn);

  //Clear Todo Input Value
  todoInput.value = "";

  //increase counter and update on adding list item
  counter++;
  taskCounter.innerHTML = counter;
}

function deleteCheck(e) {
  const item = e.target;
  //Delete todo
  if (item.classList[0] === "del-btn") {
    const todo = item.parentElement;
    //Animation
    todo.classList.add("fall");
    todo.addEventListener("transitionend", function () {
      todo.remove();
    });

    //increase counter and update on adding list item
    counter--;
    taskCounter.innerHTML = counter;
  }
  //Done todo
  if (item.classList[0] === "done-btn") {
    const todo = item.parentElement;
    todo.classList.toggle("completed");
  }
}

function filterTodo(e) {
  const todos = todoList.childNodes;
  console.log(todoList.childNodes);
  todos.forEach(function (todo) {
    switch (e.target.value) {
      case "all":
        todo.style.display = "flex";
        break;
      case "completed":
        if (todo.classList.contains("completed")) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }
        break;
      case "uncompleted":
        if (!todo.classList.contains("completed")) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }
        break;
    }
  });
}
