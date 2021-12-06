// Data atual (inicio estatico da tarefa)
let today = new Date().toISOString().substring(0, 10);
document.getElementById("todo_date").setAttribute("min", today);
document.getElementById("todo_date").setAttribute("value", today);
let todayPrinted = new Date().toLocaleDateString();
let todayCoverted = new Date().toISOString().replace(/T.*/, '').split('-').reverse().join('/');

//Define data estatica do dia atual
document.getElementById("todo_today").setAttribute("min", today);
document.getElementById("todo_today").setAttribute("value", today);
document.getElementById("todo_today").setAttribute("max", today);

console.log(today)

//Seletores
const todoDate = document.querySelector('.todo_date');
const todoInput = document.querySelector('.todo_input');
const todoButton = document.querySelector('.todo_button');
const todoList = document.querySelector('.todo_list');
const filterOption = document.querySelector('.filter_todo');

//Eventos de add e deletar
console.log(todoInput.value);
todoButton.addEventListener("click", addTodo)
todoList.addEventListener("click", deleteCheck)


//funções

let tamanhoLocal = localStorage.length

for(let i = 0; i < tamanhoLocal; i++){
    const tarefasKeys = localStorage.getItem(i);

    // let tarefas = [];

    exemplo = JSON.parse(tarefasKeys)

    // tarefasKeys.map(key => {
    //     tarefas.push(localStorage.get(1))
    // })

    // tarefas.forEach( tarefa => {
    //todo DIV
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');
    //todo LI 
    const newTodo = document.createElement('li');
    newTodo.innerText = exemplo.descricao
    newTodo.innerText += ' - inicio: ' + exemplo.dataInicio;
    newTodo.innerText += ' - fim: ' + exemplo.dataFinal;
    newTodo.style.textAlign = 'center';
    newTodo.classList.add('todo_item');
    todoDiv.appendChild(newTodo);

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
    todoList.appendChild(todoDiv);

    
}



// })

let id = 0;
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
    newTodo.innerText += ' - fim: ' + todoDate.value.replace(/T.*/, '').split('-').reverse().join('/');
    newTodo.style.textAlign = 'center';
    newTodo.classList.add('todo_item');
    todoDiv.appendChild(newTodo);

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
    let errosArray = [];
    if (todoInput.value == "" || todoDate.value == "") {
        alert("Favor, preencher todos os campos!!!")
        errosArray.push("Favor, preencher todos os campos!!!")

    }
    if (!/.{10}/.test(todoInput.value)) {
        alert("O campo deve ter no mínimo 10 caracteres!")
        errosArray.push("O campo deve ter no mínimo 10 caracteres!")
    }
    if (errosArray.length == 0) {
        todoList.appendChild(todoDiv);

        let dataTermino = todoDate.value.replace(/T.*/, '').split('-').reverse().join('/')

        let dados = {
            descricao: todoInput.value,
            dataInicio: todayPrinted,
            dataFinal: dataTermino
        }

        
        localStorage.setItem(id, JSON.stringify(dados));
        id++;
        
    }

    //Clear todo input VALUE
    todoInput.value = ""

}



//Função para deletar e marcar o item da lista
function deleteCheck(e) {
    const item = e.target;
    //Deletar item
    if (item.classList[0] === "delete_btn") {
        if (confirm('Tem certeza que desaja remover essa tarefa?')) {
            const todo = item.parentElement;
            todo.classList.add("fall")
            todo.addEventListener('transitionend', function () {
                todo.remove()
            })
        } else {
            // Do nothing!
        }

    }
    // Marcar item
    if (item.classList[0] === "complete_btn") {
        const todo = item.parentElement;
        todo.classList.toggle("completedItem")
    }
}

//Check 10 caracteres
let eventoButao = todoButton.addEventListener("click", event => {
    event.preventDefault();


})



