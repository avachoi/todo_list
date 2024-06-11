const header = document.querySelector("h1");
const main = document.getElementById("main");
const form = document.getElementById("form");
const todoInput = form.elements["todoInput"];
const lists = document.getElementById("lists");

lists.style.backgroundColor = "rgb(247, 238, 240)";
todoInput.style.width = "350px";
todoInput.style.margin = "20px";
header.style.textAlign = "center";

function addTodo(e) {
	e.preventDefault();
	const newTask = todoInput.value;
	let todo = document.createElement("li");
	todo.innerHTML = newTask;
	lists.appendChild(todo);
	todoInput.value = "";
}

form.addEventListener("submit", (e) => addTodo(e));

header.style.fontFamily = "Gill Sans";

// const app = document.getElementById("app");
// const main = document.createElement("div");
// app.appendChild(main);
// main.id = "main";
// const input = document.createElement("input");
// main.appendChild(input);

// input.addEventListener()
