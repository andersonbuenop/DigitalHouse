

let corpo = document.querySelector('body');
//console.log(corpo);

document.getElementById("conteudo").innerText = "Novo Conteudo!";
document.getElementById("conteudo").style.color = "red";
document.getElementById("conteudo").style.backgroundColor = "yellow";

let h1 = document.querySelector('h1');
//console.log(h1);

let div = document.querySelector('div');
//console.log(div);

let section = document.querySelector('section');
//console.log(section);

// primeiro item da lista
let fisrtLineContent = document.querySelector(".conteudo li").innerText;
console.log(fisrtLineContent);

//segundo item da lista
let secLineContent = document.querySelector(".conteudo li:nth-child(2)").innerText;
console.log(secLineContent);

//totos itens da lista
let allLineContent = document.querySelector("ul").innerText;
console.log(allLineContent);

//efeito hover na classe "animado"
let animado = document.querySelector(".animado h2").innerText;
console.log(animado);

var style = document.createElement('style');
style.type = 'text/css';
style.innerHTML = '.animado h2 { td:hover {background: blue }';
document.querySelector(".animado h2").style.setProperty('--td-background-color', 'red');