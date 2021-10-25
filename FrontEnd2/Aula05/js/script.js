let body = document.querySelector('body');

function colorChange(){
    body.classList.toggle('dark');
}

let botao = document.querySelector('button');
botao.onclick = colorChange;