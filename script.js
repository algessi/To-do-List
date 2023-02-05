const input = document.querySelector('#todo-input');
const addButton = document.querySelector('#add-button');
const todoList = document.querySelector('#todo-list');

addButton.addEventListener('click', function() {
  if (input.value === '') {
    return;
  }
  const newTodo = document.createElement('li');
  newTodo.classList.add('todo-item');
  newTodo.innerHTML = `
    <span>${input.value}</span>
    <button class="delete-button">Delete</button>
  `;
  todoList.appendChild(newTodo);
  input.value = '';
});

todoList.addEventListener('click', function(event) {
  if (event.target.classList.contains('delete-button')) {
    event.target.parentElement.remove();
  }
});
