let calculo = require('./mesaModulo/modulos')
let calculo2 = require('./mesaModulo/modulos')
let calculo3 = require('./mesaModulo/modulos')
let calculo4 = require('./mesaModulo/modulos')
let maiuscula = require('./mesaModulo/modulos')
let mais = require('./mesaModulo/modulos')

//fazer parecido com este exemplo: 
console.log("Resultado do Cálculo SOMAR = "+calculo.soma(2,3));


// enunciado
calculo2.subtrair(20,3); // calcular
calculo3.multiplicar(20,3); // calcular
calculo4.dividir(20,3); // calcular
maiuscula.maiuscula('silvia'); // converter em letra maiúcula
mais.maiuscula('aaa'); // converter em letra maiúcula


console.log("Resultado do Cálculo SUBTRAIR = "+calculo2.subtrair(20,3));
console.log("Resultado do Cálculo MULTIPLICAR = "+calculo3.multiplicar(20,3));
console.log("Resultado do Cálculo DIVIDIR = "+calculo4.dividir(20,3));
console.log("MAIUSCULA = "+maiuscula.maiuscula('silvia'));
console.log("MAIS = "+mais.maiuscula('aaa'));
