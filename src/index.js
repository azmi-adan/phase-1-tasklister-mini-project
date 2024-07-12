document.addEventListener("DOMContentLoaded", () => {
  // your code here
});
const createTaskForm = document.getElementById('create-task-form');
const taskList = document.getElementById('tasks');

createTaskForm.addEventListener('submit', (event) => {
  event.preventDefault(); // prevent the form from submitting and reloading the page

  const newTaskDescription = document.getElementById('new-task-description').value.trim();

  if (newTaskDescription) {
    const newTask = document.createElement('li');
    newTask.textContent = newTaskDescription;
    taskList.appendChild(newTask);

    document.getElementById('new-task-description').value = ''; // clear the input field
  }
});