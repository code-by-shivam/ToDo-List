const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const currentDateEl = document.getElementById("current-date");
const taskStats = document.getElementById("task-stats");

// 🗓 Display today's date
function displayCurrentDate() {
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const today = new Date();
  currentDateEl.textContent = today.toLocaleDateString('en-US', options);
}
displayCurrentDate();

// ➕ Add new task
function addTask() {
  if (inputBox.value.trim() === "") {
    alert("You must write something!");
    return;
  }

  const li = document.createElement("li");

  // task text span
  const taskText = document.createElement("span");
  taskText.className = "task-text";
  taskText.textContent = inputBox.value;
  li.appendChild(taskText);

  // edit button
  const editBtn = document.createElement("button");
  editBtn.textContent = "✏️ Edit";
  editBtn.className = "edit-btn";
  li.appendChild(editBtn);

  // delete button
  const delBtn = document.createElement("span");
  delBtn.innerHTML = "\u00d7";
  li.appendChild(delBtn);

  listContainer.appendChild(li);
  inputBox.value = "";
  saveData();
  updateTaskCount();
}

// ✅, ✏️, ❌ Actions
listContainer.addEventListener("click", (e) => {
  const target = e.target;

  if (target.tagName === "LI") {
    target.classList.toggle("checked");
    saveData();
  } 
  
  else if (target.classList.contains("edit-btn")) {
    const li = target.parentElement;
    const textSpan = li.querySelector(".task-text");

    if (target.textContent === "✏️ Edit") {
      // Switch to edit mode
      const input = document.createElement("input");
      input.type = "text";
      input.value = textSpan.textContent;
      input.className = "edit-input";
      li.insertBefore(input, textSpan);
      li.removeChild(textSpan);
      target.textContent = "💾 Save";
      input.focus();
    } 
    else if (target.textContent === "💾 Save") {
      // Save edited text
      const input = li.querySelector(".edit-input");
      const newText = input.value.trim() || "Untitled Task";
      const newSpan = document.createElement("span");
      newSpan.className = "task-text";
      newSpan.textContent = newText;
      li.insertBefore(newSpan, input);
      li.removeChild(input);
      target.textContent = "✏️ Edit";
      saveData();
    }
  } 
  
  else if (target.tagName === "SPAN" && !target.classList.contains("edit-btn")) {
    target.parentElement.remove();
    saveData();
    updateTaskCount();
  }
});

// 💾 Save to local storage
function saveData() {
  localStorage.setItem("tasks", listContainer.innerHTML);
}

// 📤 Load from local storage
function showTask() {
  const storedData = localStorage.getItem("tasks");
  if (storedData) listContainer.innerHTML = storedData;
  updateTaskCount();
}
showTask();

// 🧮 Update task count
function updateTaskCount() {
  const totalTasks = listContainer.getElementsByTagName("li").length;
  taskStats.textContent = `${totalTasks} task${totalTasks !== 1 ? 's' : ''}`;
}

// ⌨️ Add with Enter key
inputBox.addEventListener("keypress", (e) => {
  if (e.key === "Enter") addTask();
});
