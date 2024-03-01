const container1 = document.querySelector('.container-1');
const container2 = document.querySelector('.container-2');
const todoList = document.querySelector('.todo-list');
const addTodo = document.querySelector('.add-todo');
const saveTodo = document.querySelector('.save-todo');
const todoName = document.querySelector('.todo-name');
const todoTime = document.querySelector('.todo-time');

update = false;
UpdatedTodo = {};

addTodo.addEventListener('click', () => {
  container1.style.display = 'none';
  container2.style.display = 'block';
})


//Enter new Task
function createTodo() {
  if (todoName.value === '') {   
    alert('You must enter task name');
    return;
  } else {
    let liElement = document.createElement('li');
    let liItem = document.createElement('div');
    liItem.className = 'li-item';

    let taskName = document.createElement('input');
    taskName.type = 'text';
    taskName.className = 'name';
    taskName.value = todoName.value;
    taskName.setAttribute('readonly', 'readonly')
    liItem.appendChild(taskName);
    todoName.value = '';

    let taskTime = document.createElement('input');
    taskTime.type = 'text';
    taskTime.className = 'time';
    taskTime.value = todoTime.value;
    taskName.setAttribute('readonly', 'readonly')
    liItem.appendChild(taskName);
    liItem.appendChild(taskTime);
    todoTime.value = '';
    liElement.appendChild(liItem);

    let liAction = document.createElement('div');
    liAction.className = 'action';

    let editTask = document.createElement('span');
    editTask.innerHTML = '<i>e</i>';
    // editTask.innerHTML = '<i class="fa-solid fa-pen-to-square"></i>';
    editTask.className = 'edit';
    liAction.appendChild(editTask);

    let deleteTask = document.createElement('span');
    deleteTask.innerHTML = '<i class="fa-solid fa-trash"></i>';
    deleteTask.className = 'delete';
    liAction.appendChild(deleteTask);
    liElement.appendChild(liAction);

    todoList.appendChild(liElement);

    container1.style.display = 'block';
    container2.style.display = 'none';

    // Edit Task
    editTask.addEventListener('click', () => {
      if (editTask.innerHTML === '<i>e</i>') {      
      // if (editTask.innerHTML = '<i class="fa-solid fa-pen-to-square"></i>') {      
        editTask.innerHTML = '<i class="fa-regular fa-floppy-disk"></i>';
        taskName.removeAttribute('readonly');
        taskName.focus();
        taskTime.removeAttribute('readonly');
        taskTime.focus();
        console.error(error);
      } else {
        editTask.innerHTML = '<i>e</i>';
        // editTask.innerHTML = '<i class="fa-solid fa-pen-to-squar></i>';
        taskName.setAttribute('readonly', 'readonly');
        taskTime.setAttribute('readonly', 'readonly');
      }
    })

    // Delete Task
    deleteTask.addEventListener('click', () => {
      todoList.removeChild(liElement);
    })
  }
}
