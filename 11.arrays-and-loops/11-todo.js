const todoList = [
  { name: "make dinner", dueDate: "2024-12-22" },
  {
    name: "wash dishes",
    dueDate: "2024-12-22",
  },
];

renderTodoList();

function renderTodoList() {
  let todoListHTML = "";

  for (i = 0; i < todoList.length; i++) {
    const todoObject = todoList[i];
    const { name, dueDate } = todoObject;
    const html = `
    <div> ${name}</div>
    <div> ${dueDate}</div>
 
    <button onClick="
    todoList.splice(${i},1);
    renderTodoList();
    " class="delete-todo-button">Delete</button>
    `;
    console.log(html);
    todoListHTML += html;
  }

  document.querySelector(".js-todo-list").innerHTML = todoListHTML;
}

function addTodo() {
  const inputElement = document.querySelector(".js-name-input");
  const dueInputElement = document.querySelector(".js-due-date-input");
  const name = inputElement.value;
  const dueDate = dueInputElement.value;
  todoList.push({ name, dueDate });

  inputElement.value = "";
  dueInputElement.value = "";

  renderTodoList();
}

// steps(Algorithms)
// loop through the array
// create some HTML code for each todo
// put the HTML on web page
