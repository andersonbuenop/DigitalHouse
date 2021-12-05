// Data atual (inicio estatico da tarefa)
let today = new Date().toISOString().substring(0, 10);
document.getElementById("todo_date").setAttribute("min", today);
document.getElementById("todo_date").setAttribute("value", today);
let todayPrinted = new Date().toLocaleDateString();
let todayCoverted = new Date().toISOString().replace(/T.*/,'').split('-').reverse().join('-')

console.log(today)

//Seletores
const todoDate = document.querySelector('.todo_date');
const todoInput = document.querySelector('.todo_input');
const todoButton = document.querySelector('.todo_button');
const todoList = document.querySelector('.todo_list');
const filterOption = document.querySelector('.filter_todo');

//Eventos de add, marcar e deletar
todoButton.addEventListener("click", addTodo)
todoList.addEventListener("click", deleteCheck)


//funções

//Função para criar o item na lista
function addTodo(event) {
    event.preventDefault();
    //todo DIV
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');
    //todo LI 
    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    newTodo.innerText += ' - inicio: ' + todayPrinted;
    newTodo.innerText += ' - fim: ' + todoDate.value.replace(/T.*/,'').split('-').reverse().join('/');
    newTodo.style.textAlign = 'center';
    newTodo.classList.add('todo_item');
    todoDiv.appendChild(newTodo);
    if(todoInput.value === ""){
        return null
    }
    //Marcar como conluiido
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    completedButton.classList.add('complete_btn')
    todoDiv.appendChild(completedButton);
    //Deletar item da lista
    const deleteButton = document.createElement('button');
    deleteButton.innerHTML = '<i class="fas fa-trash"></i>';
    deleteButton.classList.add('delete_btn')
    todoDiv.appendChild(deleteButton);
    //Append to Actual LIST
    todoList.appendChild(todoDiv);
    //Clear todo input VALUE
    todoInput.value = ""
}

//Função para deletar e marcar o item da lista
function deleteCheck(e) {
    const item = e.target;
    //Deletar item
    if (item.classList[0] === "delete_btn") {
        const todo = item.parentElement;
        // Animação "fall" quando deletar item
        todo.classList.add("fall")
        todo.addEventListener('transitionend', function () {
            todo.remove()
        })
    }
    // Marcar item
    if (item.classList[0] === "complete_btn") {
        const todo = item.parentElement;
        todo.classList.toggle("completedItem")
    }
}