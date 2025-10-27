# 📝 ApniList — To-Do List App  

A **simple, modern, and responsive To-Do List** web application built using **HTML, CSS, and JavaScript**.  
ApniList helps you manage your daily tasks easily — add, edit, delete, and mark tasks as completed — with automatic saving through your browser’s `localStorage`.  

---

## 🌐 Live Demo  

👉 **View it live here:**  
🔗 [https://apnilist.netlify.app/](https://apnilist.netlify.app/)  

---

## ✨ Features  

- 🆕 **Add New Tasks** — Quickly add new tasks using the input box and “Add Task” button.  
- ✏️ **Edit Tasks Inline** — Click on any task name to edit it directly (press Enter or click away to save).  
- ✅ **Mark as Completed / Uncompleted** — Use the checkbox to toggle a task’s completion status.  
- ❌ **Delete Tasks** — Remove tasks instantly with the delete (cross) icon.  
- 💾 **Auto Save with LocalStorage** — Your tasks are saved automatically in the browser and persist after page reloads.  
- 🕓 **Show Creation Date & Time** — Every task displays the exact date and time it was created.  
- 📊 **Task Statistics** — View total, completed, and remaining task counts in real-time.  
- 📱 **Fully Responsive Design** — Works smoothly on desktop, tablet, and mobile screens.  
- ⚠️ **Input Validation** — Empty tasks cannot be added.  

---

## 🛠️ Technologies Used  

| Technology | Purpose |
|-------------|----------|
| **HTML5** | App structure |
| **CSS3** | Styling and layout |
| **JavaScript (ES6)** | Functionality and logic |
| **LocalStorage API** | Data persistence |

---

## 🚀 How to Use  

1. **Clone this repository**
   ```bash
   git clone https://github.com/your-username/apnilist.git
Open the project folder

bash
Copy code
cd apnilist
Launch the app

bash
Copy code
start index.html     # For Windows  
open index.html      # For macOS  
✅ You can now start adding, editing, completing, and managing your tasks easily.

📂 Folder Structure
graphql
Copy code
📁 ApniList/
├── index.html        # Main HTML structure
├── style.css         # Styles for layout and design
├── script.js         # JavaScript logic and localStorage handling
└── README.md         # Documentation
💡 How It Works
When a new task is added, it’s stored in localStorage as JSON.

On page reload, saved tasks automatically reappear.

You can edit, delete, or mark tasks as completed, and changes are saved instantly.

Each task includes its creation timestamp, displayed below the task name.

Counters dynamically update based on your actions.

🏁 Final Thoughts
ApniList is a lightweight, fast, and user-friendly to-do app designed to make your daily task management effortless.
It’s completely offline-capable, so your data stays safe and accessible at all times.

✨ Whether for work, study, or personal goals — ApniList helps you stay productive and organized!