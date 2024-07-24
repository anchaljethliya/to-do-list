const taskTextInput = document.getElementById('task-input');
const addTaskButton = document.querySelector('.add-task-button');
const taskList = document.querySelector('.task-list');

addTaskButton.addEventListener('click', () => {
  const taskText = taskTextInput.value.trim();
  if (taskText !== '') {
    const taskElement = document.createElement('li');
    taskElement.textContent = taskText;

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    taskElement.prepend(checkbox);

    taskList.appendChild(taskElement);

    taskTextInput.value = '';
  }
});

taskTextInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    addTaskButton.click();
  }
});