const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");
const clearCompletedBtn = document.getElementById("clearCompletedBtn");
const displayAllBth = document.getElementById("displayAllBth");
const clearAllBth = document.getElementById("clearAllBth");
let tasks = [];
let completedTasks = [];
let showCompletedTasks = false;

function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText !== "") {
        tasks.push({ text: taskText});
        taskInput.value = "";
        displayTasks();
    }
}

function displayTasks() {
    taskList.innerHTML = "";
    let tmpTasks = showCompletedTasks ? completedTasks : tasks;
    tmpTasks.forEach((task, index) => {
        const li = document.createElement("li");
        li.innerHTML = `<input type="checkbox" id="task-${index}" ${task.completed ? "checked" : ""}>
            <label for="task-${index}">${task.text}</label>`;
        li.querySelector("input").addEventListener("change", () => toggleTask(index));
        taskList.appendChild(li);
    });
}

function toggleTask(index) {
    tasks[index].completed = !tasks[index].completed;
    displayTasks();
}

function clearCompletedTasks() {
    completedTasks = tasks.filter(task => !task.completed);
    showCompletedTasks = true;
    displayTasks();
}

function displayAllTasks() {
    showCompletedTasks = false;
    displayTasks();
}

function clearAllTasks() {
    tasks = [];
    displayTasks();
}

addTaskBtn.addEventListener("click", addTask);
clearCompletedBtn.addEventListener("click", clearCompletedTasks);
displayAllBth.addEventListener("click", displayAllTasks);
clearAllBth.addEventListener("click", clearAllTasks);