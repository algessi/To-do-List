const input = document.querySelector("#todo-input");
const addButton = document.querySelector("#add-button");
const todoList = document.querySelector("#todo-list");

addButton.addEventListener("click", function () {
  if (input.value === "") {
    alert("Please enter a task!");
    return;
  }

  const newTodo = document.createElement("li");
  newTodo.classList.add("todo-item");
  newTodo.innerHTML = `
    <span class="todo-name">${input.value}</span>
    <button class="edit-button">Edit</button>
    <button class="delete-button">Delete</button>
  `;
  todoList.appendChild(newTodo);
  input.value = "";
});

input.addEventListener("keyup", function (event) {
  if (event.keyCode === 13) {
    if (input.value === "") {
      alert("Please enter a task!");
      return;
    }

    addButton.click();
  }
});

todoList.addEventListener("click", function (event) {
  if (event.target.classList.contains("delete-button")) {
    event.target.parentElement.remove();
  } else if (event.target.classList.contains("edit-button")) {
    const todoName = event.target.parentElement.querySelector(".todo-name");
    const todoInput = document.createElement("input");
    todoInput.type = "text";
    todoInput.value = todoName.textContent;
    todoName.replaceWith(todoInput);

    const saveButton = document.createElement("button");
    saveButton.textContent = "Save";
    event.target.replaceWith(saveButton);

    saveButton.addEventListener("click", function () {
      todoName.textContent = todoInput.value;
      todoInput.replaceWith(todoName);
      saveButton.replaceWith(event.target);
    });
  }
});
