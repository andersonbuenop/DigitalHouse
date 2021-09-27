/*
Grupo 01:
- Pedro Cardoso
- Alexandre Bastos
- Loyana Jacinto
- Anderson Bueno
- Wagner Sena
*/

const functionsImport = require('./modules/functions');
const listasImport = require('./modules/listas');

// Array de Objetos
console.log(`Maior altura da lista1: ${functionsImport.maiorAltura(listasImport.lista1)}`);
console.log(`Menor altura da lista1: ${functionsImport.menorAltura(listasImport.lista1)}`);
console.log(`Média de altura das mulheres da lista2: ${functionsImport.mediaMulheres(listasImport.lista2).toFixed(2)}`);
console.log(`Quantidade de Homens da lista2: ${functionsImport.qtdHomens(listasImport.lista2)}`); 