const taskInput = document.getElementById('task-input');
const addTaskBtn = document.getElementById('add-task-btn');
const taskList = document.getElementById('task-list');

function addTask() {
  if (taskInput.value !== '') {
    const task = document.createElement('li');
    const taskText = document.createElement('span');
    const deleteBtn = document.createElement('button');
    const renameBtn = document.createElement('button');
    
    taskText.textContent = taskInput.value;
    deleteBtn.textContent = 'Delete';
    renameBtn.textContent = 'Rename';

    task.appendChild(taskText);
    task.appendChild(renameBtn);
    task.appendChild(deleteBtn);

    taskList.appendChild(task);
    taskInput.value = '';

    deleteBtn.addEventListener('click', () => {
      task.remove();
    });

    renameBtn.addEventListener('click', () => {
      const taskTextInput = document.createElement('input');
      taskTextInput.value = taskText.textContent;
      task.replaceChild(taskTextInput, taskText);
      taskTextInput.focus();
      taskTextInput.addEventListener('blur', () => {
        taskText.textContent = taskTextInput.value;
        task.replaceChild(taskText, taskTextInput);
      });
      taskTextInput.addEventListener('keyup', (event) => {
        if (event.key === 'Enter') {
          taskText.textContent = taskTextInput.value;
          task.replaceChild(taskText, taskTextInput);
        }
      });
    });
  } else {
    alert('Please enter a task before adding!');
  }
}

addTaskBtn.addEventListener('click', addTask);

taskInput.addEventListener('keyup', (event) => {
  if (event.key === 'Enter') {
    addTask();
  }
});
