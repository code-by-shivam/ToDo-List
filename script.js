const todoForm = document.querySelector("#todo-form");
const todoList = document.querySelector(".todos");
const totalTasks = document.querySelector("#total-tasks");
const completedTasks = document.querySelector("#completed-tasks");
const remainingTasks = document.querySelector("#remaining-tasks");
const mainInput = document.querySelector("#todo-form input");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

if (localStorage.getItem("tasks")) {
  tasks.forEach((task) => createTask(task));
}

todoForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const inputValue = mainInput.value.trim();
  if (inputValue === "") return;

  const now = new Date();
  const formattedDate = now.toLocaleString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });

  const task = {
    id: new Date().getTime(),
    name: inputValue,
    isCompleted: false,
    createdAt: formattedDate, // ✅ added date
  };

  tasks.push(task);
  localStorage.setItem("tasks", JSON.stringify(tasks));

  createTask(task);
  todoForm.reset();
  mainInput.focus();
});

todoList.addEventListener("click", (e) => {
  if (e.target.closest(".remove-task")) {
    const taskId = e.target.closest("li").id;
    removeTask(taskId);
  }
});

todoList.addEventListener("input", (e) => {
  const taskId = e.target.closest("li").id;
  updateTask(taskId, e.target);
});

todoList.addEventListener("keydown", (e) => {
  if (e.keyCode === 13) {
    e.preventDefault();
    e.target.blur();
  }
});

function createTask(task) {
  const taskEl = document.createElement("li");
  taskEl.setAttribute("id", task.id);

  if (task.isCompleted) taskEl.classList.add("complete");

  const taskElMarkup = `
    <div>
      <input type="checkbox" name="tasks" id="${task.id}" ${task.isCompleted ? "checked" : ""}>
      <span ${!task.isCompleted ? "contenteditable" : ""}>${task.name}</span>
    </div>
    <small class="task-date">🕓 ${task.createdAt || "No date available"}</small>
    <button title="Remove the ${task.name} task" class="remove-task">
      <svg fill="#000000" width="20px" height="20px" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
        <path d="M697.4 759.2l61.8-61.8L573.8 512l185.4-185.4-61.8-61.8L512 450.2 
        326.6 264.8l-61.8 61.8L450.2 512 264.8 697.4l61.8 61.8L512 573.8z"/>
      </svg>
    </button>
  `;

  taskEl.innerHTML = taskElMarkup;
  todoList.appendChild(taskEl);
  countTasks();
}

function countTasks() {
  const completedTasksArray = tasks.filter((task) => task.isCompleted === true);
  totalTasks.textContent = tasks.length;
  completedTasks.textContent = completedTasksArray.length;
  remainingTasks.textContent = tasks.length - completedTasksArray.length;
}

function removeTask(taskId) {
  tasks = tasks.filter((task) => task.id !== parseInt(taskId));
  localStorage.setItem("tasks", JSON.stringify(tasks));
  document.getElementById(taskId).remove();
  countTasks();
}

function updateTask(taskId, el) {
  const task = tasks.find((task) => task.id === parseInt(taskId));
  if (!task) return;

  if (el.hasAttribute("contenteditable")) {
    task.name = el.textContent;
  } else {
    const span = el.nextElementSibling;
    const parent = el.closest("li");

    task.isCompleted = !task.isCompleted;
    if (task.isCompleted) {
      span.removeAttribute("contenteditable");
      parent.classList.add("complete");
    } else {
      span.setAttribute("contenteditable", "true");
      parent.classList.remove("complete");
    }
  }

  localStorage.setItem("tasks", JSON.stringify(tasks));
  countTasks();
}
