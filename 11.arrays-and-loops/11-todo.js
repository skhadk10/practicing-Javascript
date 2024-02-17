const todoList = ["make dinner", "wash dishes"];

renderTodoList()

function renderTodoList() {
  let todoListHTML = "";

  for (i = 0; i < todoList.length; i++) {
    const todo = todoList[i];
    const html = `<p> ${todo}</p>`;
    todoListHTML += html;
  }
  console.log(todoListHTML);

  console.log(
    (document.querySelector(".js-todo-list").innerHTML = todoListHTML)
  );
}

function addTodo() {
  const inputElement = document.querySelector(".js-name-input");
  const name = inputElement.value;

  todoList.push(name);

  inputElement.value = "";
  
  renderTodoList()
}

// steps(Algorithms)
// loop through the array
// create some HTML code for each todo
// put the HTML on web page
