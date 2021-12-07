let button = document.querySelector(".btn")
let conteudo = document.querySelector(".conteudo")

button.addEventListener("click", (event) =>{

    event.preventDefault();

    fetch('https://jsonplaceholder.typicode.com/todos/')
    .then(response => response.json())
    .then(json => {
        conteudo.innerHTML =  json.map( todos => `
            <div class="corpos ${todos.completed}"> 
                <p>${todos.title}<p> 
                <p>${todos.id}</p>
            </div>`).join("");
    })
})

