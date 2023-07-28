const todoList = [{
    name: 'make dinner',
    dueDate: '2022-12-22',
    dueTime:'10:10',
    }];

    renderTodoList();

function renderTodoList() {
let todoListHTML = '';

for (let i = 0; i < todoList.length; i++) {
const todoObject = todoList[i];
//const name = todoObject.name;
//const dueDate = todoObject.dueDate;
const { name, dueDate ,dueTime} = todoObject;
const html = `
  <div>${name}</div> 
  <div>${dueDate}</div> 
  <div>${dueTime}</div> 
  <button onclick="
    todoList.splice(${i}, 1);
    renderTodoList();
  " class="delete-todo-button">Delete</button> 
`;
todoListHTML += html;
}

document.querySelector('.js-todo-list')
.innerHTML = todoListHTML;
}

function addTodo() {
const inputElement = document.querySelector('.js-name-input');
const name = inputElement.value;

const dateInputElement = document.querySelector('.js-due-date-input');
const dueDate = dateInputElement.value;

const timeInputElement = document.querySelector('.js-due-time-input');
const dueTime = timeInputElement.value;

todoList.push({
//name: name,
//dueDate: dueDate,
name,
dueDate,
dueTime
});

inputElement.value = '';
dateInputElement.value = '';
timeInputElement.value="00:00";

renderTodoList();
}